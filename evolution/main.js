var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 100 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// Platform
var platform_geo = new THREE.BoxGeometry(5, 0.5, 5);
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

camera.position.z = 7;
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
    // var randomTargetX = -2;
    // var randomTargetY = 2;

    target.position.x = randomTargetX;
    target.position.z = randomTargetY;

    target.name = "target_"+targetValue;
    targetValue += 1;


    // console.log(randomTargetX, randomTargetY);
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
const speedMax = 0.02;
// Actor
var actorValue = 0;

function createActor(count){
  for (var i = 0; i < count; i++) {
    var actor_geo = new THREE.BoxGeometry(0.1, 0.1, 0.1);
    var actor_mat = new THREE.MeshBasicMaterial( { color: 0xF0CF5A} );
    var actor = new THREE.Mesh( actor_geo, actor_mat );


    actor.position.x = getRandomArbitrary(-2,2);
    actor.position.z = getRandomArbitrary(-2,2);

    actor.position.y += 0.5;
    actor.name = "actor_"+actorValue;
    actor.speed = getRandomArbitrary(speedMin, speedMax);
    actor.home = possibleHomePosition[Math.floor(getRandomArbitrary(0,400))]
    actor.number = actorValue;

    actorValue += 1;


    var wireframe_geo = new THREE.EdgesGeometry( actor.geometry );
    var wireframe_mat = new THREE.LineBasicMaterial( { color: 0xffffff, linewidth: 4 } );
    var wireframe = new THREE.LineSegments( wireframe_geo, wireframe_mat );
    wireframe.renderOrder = 1;
    actor.add( wireframe );


    scene.add( actor );
  }


}
createActor(30);


// Day system
var moment = 0;
var day = 0;
const dayTime = 500;
function passDay(){
  day += 1;
  createTarget(100);
  // console.log('Days passed: ', day)
}
createTarget(1);



var actorEnergy = 10000;
var minWayTarget = 5;
var minWayTargetIndex = 0;
var minWayTargetIndexAll = [];
var selectedActor = 0;

var isAnyTarget = true;
function findNearTarget(actor){
  selectedActor = actor;
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
    selectedObject.material.color.setHex( 0x39A99F );

  }


  minWayTargetIndexAll[actor.number] = minWayTargetIndex;
}




var deletedTargetCount = 0;
var stopAnimation = false;
// Animation cycle
function animate() {
	requestAnimationFrame( animate );
  if(!stopAnimation){
    for (var i = 0; i < actorValue; i++) {
      selectedActor = scene.getObjectByName('actor_'+i);
      if(!isAnyTarget){
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
      }
    }


    for (var i = 0; i < actorValue; i++) {
      selectedActor = scene.getObjectByName('actor_'+i);
      findNearTarget(selectedActor);
    }

    if(isAnyTarget){
      for (var i = 0; i < actorValue; i++) {
        selectedActor = scene.getObjectByName('actor_'+i);
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
    }
    actorEnergy -= 1;

    for (var i = 0; i < actorValue; i++) {
      selectedActor = scene.getObjectByName('actor_'+i);
      if(actorEnergy==0){
        var selectedObject = scene.getObjectByName('actor');
        scene.remove( selectedObject );
        selectedActor.position.x -= 1000;
        selectedActor.position.z -= 1000;
      }
    }


    for (var i = 0; i < actorValue; i++) {
      selectedActor = scene.getObjectByName('actor_'+i);
      if( Math.abs(selectedActor.position.x - targets[minWayTargetIndexAll[selectedActor.number]][0]) < selectedActor.speed && Math.abs(selectedActor.position.z - targets[minWayTargetIndexAll[selectedActor.number]][1]) < selectedActor.speed){

        // Removing targets

        deletedTargetCount += 1;

        var selectedObject = scene.getObjectByName('target_'+minWayTargetIndexAll[selectedActor.number]);

        scene.remove( selectedObject );

        targets[minWayTargetIndexAll[selectedActor.number]][0] = 100;
        targets[minWayTargetIndexAll[selectedActor.number]][1] = 100;

        if(targets.length == deletedTargetCount){
          isAnyTarget = false;
        }
        findNearTarget(selectedActor);

      }

    }

    moment += 1;
    if (moment % dayTime == 0){
      passDay();
    }
  	renderer.render( scene, camera );
  }
}
animate();


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

});

camera_pivot.rotation.x -= 0.5;
function onMouseMove(event) {
  camera_pivot.rotation.y -= event.movementX * 0.004;
  camera_pivot.rotation.x -= event.movementY * 0.004;
}
