var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 100 );
var renderer = new THREE.WebGLRenderer();


renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// Platform
var platform_geo = new THREE.BoxGeometry(5, 0.9, 5);
var platform_mat = new THREE.MeshBasicMaterial( { color: 0x173D5D} );
var platform = new THREE.Mesh( platform_geo, platform_mat );
var wireframe_geo = new THREE.EdgesGeometry( platform.geometry );
var wireframe_mat = new THREE.LineBasicMaterial( { color: 0xffffff, linewidth: 4 } );
var wireframe = new THREE.LineSegments( wireframe_geo, wireframe_mat );

wireframe.renderOrder = 1;
platform.add( wireframe );
scene.add( platform );

// Camera object (center) object
var camera_pivot = new THREE.Object3D()
var Y_AXIS = new THREE.Vector3( 0, 1, 0 );
scene.add( camera_pivot );
camera_pivot.add( camera );
camera.position.set( 0, 0, 0 );
camera.lookAt( camera_pivot.position );
camera_pivot.rotateOnAxis( Y_AXIS, 0.01 );
camera_pivot.rotation.x = -0.8;
camera.position.z = 5;

// Target
var targets = [];
var targetValue = 0;
function createTarget(count){
  isAnyTarget = true;
  for (var i = 0; i < count; i++) {
    var target_geo = new THREE.SphereGeometry(0.1, 0.1, 0.1);
    var target_mat = new THREE.MeshBasicMaterial( { color: 0x206097} );
    var target = new THREE.Mesh( target_geo, target_mat );
    target.position.y += 0.5;
    var randomTargetX = getRandomInt(-2, 2);
    var randomTargetY = getRandomInt(-2, 2);
    target.position.x = randomTargetX;
    target.position.z = randomTargetY;
    target.name = "target_"+targetValue;
    targetValue += 1;
    var temp_target = [randomTargetX, randomTargetY];
    targets.push(temp_target)
    scene.add( target );
  }
}
var possibleHomePosition = [];
for (var i = 0; i < 4; i++) {
  if(i == 0){
    for (var j = 0; j < 100; j++) {
      possibleHomePosition.push([-2, getRandomArbitrary(-2, 2)]);
    }
  }
  if(i == 1){
    for (var j = 0; j < 100; j++) {
      possibleHomePosition.push([2, getRandomArbitrary(-2, 2)]);
    }
  }
  if(i == 2){
    for (var j = 0; j < 100; j++) {
      possibleHomePosition.push([getRandomArbitrary(-2, 2), -2]);
    }
  }
  if(i == 3){
    for (var j = 0; j < 100; j++) {
      possibleHomePosition.push([getRandomArbitrary(-2, 2), 2]);
    }
  }
}



const speedMin = 0.01;
const speedMax = 0.01;

const energyMin = 1000;
const energyMax = 1000;

const targetCreateCoef = 1.3;
const targetCreateMax = 100;

const mutationProbability = 0.3;
const mutationEfficiency = 5;

const mutationSpeedComsumption = 1.4;

const demutationProbability = 0.05;

// Actor
var actors = [];
var actorValue = 0;
function createActor(count){
  isAnyTarget_predator = true;
  for (var i = 0; i < count; i++) {
    var actor_geo = new THREE.BoxGeometry(0.1, 0.1, 0.1);
    var actor_mat = new THREE.MeshBasicMaterial( { color: 0xF0CF5A} );
    var actor = new THREE.Mesh( actor_geo, actor_mat );
    actor.position.x = getRandomArbitrary(-2,2);
    actor.position.z = getRandomArbitrary(-2,2);
    actor.position.y += 0.5;
    actor.name = "actor_" + actorValue;
    actor.speed = getRandomArbitrary(speedMin, speedMax);
    actor.home = possibleHomePosition[Math.floor(getRandomArbitrary(0,400))]
    actor.number = actorValue;
    actor.energy = getRandomArbitrary(energyMin, energyMax);
    actor.root_energy = actor.energy;
    actor.death_time = 3;
    actor.death_time_counter = 0;
    actor.is_standing = false;
    actor.eaten_count = 0;
    actor.defaultColor = '0xF0CF5A';
    actor.size = 1;
    actor.predator = false;
    actor.consumption = 1;
    actorValue += 1;

    var wireframe_geo = new THREE.EdgesGeometry( actor.geometry );
    var wireframe_mat = new THREE.LineBasicMaterial( { color: 0xffffff, linewidth: 4 } );
    var wireframe = new THREE.LineSegments( wireframe_geo, wireframe_mat );

    wireframe.renderOrder = 1;
    actor.add( wireframe );
    scene.add( actor );

    actors.push(actor)
  }
}
createActor(3);


// Day system
var moment = 0;
var day = 0;
const dayTime = 800;
function passDay(){
  // removeAllTargets();
  day += 1;
  createTarget( targetCreateMax <= actorValue ? targetCreateMax : (targetCreateCoef * actorValue) );
  for (var i = 0; i < actorValue; i++) {
    selectedActor = scene.getObjectByName('actor_'+i);
    if(selectedActor){
      // Mutation
      selectedActor.children = 0;
      if(getRandomInt(0, 1) <= mutationProbability){
        switch(Math.floor(getRandomInt(0, 3))){
          case 0:
            // Speed increase
            selectedActor.speed += getRandomArbitrary(speedMin, speedMax) / mutationEfficiency;
            selectedActor.geometry = new THREE.ConeGeometry(0.1, 0.1, 0.1);
            selectedActor.defaultColor = '0xB1E054';
            selectedActor.consumption *= mutationSpeedComsumption;
            break;
          case 1:
            // Size increase
            selectedActor.predator = true;

            selectedActor.speed /= 1.5;
            selectedActor.scale.x = 3;
            selectedActor.scale.y = 3;
            selectedActor.scale.z = 3;
            break;
        }
      }

      selectedActor.death_time_counter += 1;
      if(selectedActor.eaten_count >= 1){
        selectedActor.energy = selectedActor.root_energy;
      }
      if(selectedActor.eaten_count >= 2){
        createActor(1);
      }
      selectedActor.eaten_count = 0;
      if( selectedActor.death_time_counter == selectedActor.death_time){
        removeActor(selectedActor);
      }
    }
  }
}
createTarget( targetCreateMax <= actorValue ? targetCreateMax : (targetCreateCoef * actorValue) );

var minWayTarget = 5;
var minWayTargetIndex = 0;
var minWayTargetIndexAll = [];
var minWayTargetIndexAll_predator = [];
var selectedActor = 0;

var isAnyTarget = true;
var isAnyTarget_predator = true;
function findNearTarget(actor){
  if(actor){
    selectedActor = actor;
    if(!selectedActor.predator){
      if(isAnyTarget){
        minWayTarget = 5;
        minWayTargetIndex = 0;
        for (var i = 0; i < targets.length; i++) {
          var checkWayValue = Math.sqrt( Math.pow( targets[i][0] - selectedActor.position.x , 2) + Math.pow( targets[i][1] - selectedActor.position.z, 2) );
          if(checkWayValue < minWayTarget){
            minWayTarget = checkWayValue;
            minWayTargetIndex = i;
          }
        }
        var selectedObject = scene.getObjectByName('target_'+minWayTargetIndex);
        if(selectedObject){
          selectedObject.material.color.setHex( 0x39A99F );
        }
      }
      minWayTargetIndexAll[actor.number] = minWayTargetIndex;
    } else {
      if(isAnyTarget_predator){
        minWayTarget = 5;
        minWayTargetIndex = 0;
        for (var i = 0; i < actors.length; i++) {
          if(i != selectedActor.number){
            var checkWayValue = Math.sqrt( Math.pow( actors[i].position.x - selectedActor.position.x , 2) + Math.pow( actors[i].position.z - selectedActor.position.z, 2) );
            if(checkWayValue < minWayTarget){
              minWayTarget = checkWayValue;
              minWayTargetIndex = i;
            }
          }
        }
          // var selectedObject = scene.getObjectByName('actor_'+minWayTargetIndex);
          // if(selectedObject){
          //   selectedObject.defaultColor = '0x363636';
          // }
        minWayTargetIndexAll_predator[actor.number] = minWayTargetIndex;
      }
    }
  }
}

var totalDeath = 0;
var deletedTargetCount = 0;
var deletedActorsCount = 0;
var stopAnimation = false;
// Animation cycle
function animate() {
	requestAnimationFrame( animate );
  // for (var k= 0; k < 5; i++) {
  //
  // }
  if(!stopAnimation){
    for (var i = 0; i < actorValue; i++) {
      selectedActor = scene.getObjectByName('actor_'+i);
      if(selectedActor){
        if(!isAnyTarget){
          if( !(Math.abs(selectedActor.position.x - selectedActor.home[0]) < selectedActor.speed && Math.abs(selectedActor.position.z - selectedActor.home[1]) < selectedActor.speed) ){
            selectedActor.is_standing = false;
            if(selectedActor.position.x < selectedActor.home[0]){
              selectedActor.position.x += selectedActor.speed;
            } else {
              selectedActor.position.x -= selectedActor.speed;
            }
            if(selectedActor.position.z < selectedActor.home[1]){
              selectedActor.position.z += selectedActor.speed;
            } else {
              selectedActor.position.z -= selectedActor.speed;
            }
          } else {
            selectedActor.is_standing = true;
          }
        }
      }
    }
    for (var i = 0; i < actorValue; i++) {
      selectedActor = scene.getObjectByName('actor_'+i);
      findNearTarget(selectedActor);
    }

    if(isAnyTarget && isAnyTarget_predator){
      for (var i = 0; i < actorValue; i++) {
        selectedActor = scene.getObjectByName('actor_'+i);
        if(selectedActor){
          if(!selectedActor.predator){
            selectedActor.is_standing = false;
            if(selectedActor.position.x < targets[minWayTargetIndexAll[selectedActor.number]][0]){
              selectedActor.position.x += selectedActor.speed;
            } else {
              selectedActor.position.x -= selectedActor.speed;
            }
            if(selectedActor.position.z < targets[minWayTargetIndexAll[selectedActor.number]][1]){
              selectedActor.position.z += selectedActor.speed;
            } else {
              selectedActor.position.z -= selectedActor.speed;
            }
          }
          else {
            selectedActor.is_standing = false;
            if(selectedActor.position.x < actors[minWayTargetIndexAll_predator[selectedActor.number]].position.x){
              selectedActor.position.x += selectedActor.speed;
            } else {
              selectedActor.position.x -= selectedActor.speed;
            }
            if(selectedActor.position.z < actors[minWayTargetIndexAll_predator[selectedActor.number]].position.z){
              selectedActor.position.z += selectedActor.speed;
            } else {
              selectedActor.position.z -= selectedActor.speed;
            }
          }
        }
      }
    }


    for (var i = 0; i < actorValue; i++) {
      selectedActor = scene.getObjectByName('actor_'+i);
      if(selectedActor){
        if(!selectedActor.is_standing){
          selectedActor.energy -= selectedActor.consumption;
        }
        if(selectedActor.energy <= 0){
          removeActor(selectedActor);
        }
        else if(selectedActor.energy <= 40){
          selectedActor.material.color.setHex( 0xFF4949 );
        }
        else{
          selectedActor.material.color.setHex( selectedActor.defaultColor );
        }
      }
    }

    for (var i = 0; i < actorValue; i++) {
      selectedActor = scene.getObjectByName('actor_'+i);
      if(selectedActor){
        if(!selectedActor.predator){
          if( Math.abs(selectedActor.position.x - targets[minWayTargetIndexAll[selectedActor.number]][0]) < selectedActor.speed && Math.abs(selectedActor.position.z - targets[minWayTargetIndexAll[selectedActor.number]][1]) < selectedActor.speed ){
            // Removing targets
            deletedTargetCount += 1;
            var selectedObject = scene.getObjectByName('target_'+minWayTargetIndexAll[selectedActor.number]);
            scene.remove( selectedObject );
            targets[minWayTargetIndexAll[selectedActor.number]][0] = 100;
            targets[minWayTargetIndexAll[selectedActor.number]][1] = 100;

            selectedActor.eaten_count += 1;

            if(targets.length == deletedTargetCount){
              isAnyTarget = false;
            }
            findNearTarget(selectedActor);

          }
        } else {
          if( Math.abs(selectedActor.position.x - actors[minWayTargetIndexAll_predator[selectedActor.number]].position.x) < selectedActor.speed && Math.abs(selectedActor.position.z - actors[minWayTargetIndexAll_predator[selectedActor.number]].position.z) < selectedActor.speed ){
            // Removing actors
            deletedActorsCount += 1;
            var selectedObject = scene.getObjectByName('actor_'+minWayTargetIndexAll_predator[selectedActor.number]);
            scene.remove( selectedObject );
            actors[minWayTargetIndexAll_predator[selectedActor.number]].position.x = 100;
            actors[minWayTargetIndexAll_predator[selectedActor.number]].position.z = 100;
            console.log("EATEN")

            if(actors.length-1 == deletedActorsCount){
              isAnyTarget_predator = false;
            }
            findNearTarget(selectedActor);

          }
        }
      }

    }

    moment += 1;
    if (moment % dayTime == 0){
      passDay();
    }
  	renderer.render( scene, camera );
  }
}

var animateScale = 5;
for (var i = 0; i < animateScale; i++) {
  animate();
}

function removeActor(selectedActor){
  totalDeath += 1;
  scene.remove( selectedActor );
  console.log('Death: ', selectedActor.number);
}

function removeAllTargets(){
  for (var i = 0; i < targetValue; i++) {
    selectedTarget = scene.getObjectByName('target_'+i);
    if(selectedTarget){
      scene.remove( selectedTarget );
    }
  }
}

// Control scene
var canvas = renderer.domElement;


var switch_mode = false;
document.addEventListener("keydown", event => {
  if (event.isComposing || event.keyCode === 32) {
    if(!stopAnimation){
        stopAnimation = true;
    } else {
        stopAnimation = false;
    }
  }
  if (event.isComposing || event.keyCode === 91) {
    if(!switch_mode){
      canvas.addEventListener('mousemove', onMouseMove);
      switch_mode = true;
    } else {
      canvas.removeEventListener('mousemove', onMouseMove);
      switch_mode = false;
    }
  }
  if (event.isComposing || event.keyCode === 13) {
    animate();
  }

});

camera_pivot.rotation.x -= 0.5;
function onMouseMove(event) {
  camera_pivot.rotation.y -= event.movementX * 0.004;
  camera_pivot.rotation.x -= event.movementY * 0.004;
}
