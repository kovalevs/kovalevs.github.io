var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 100 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// Platform
var platform_geo = new THREE.BoxGeometry(5, 0.5, 5);
var platform_mat = new THREE.MeshBasicMaterial( { color: 0x0055F0} );
var platform = new THREE.Mesh( platform_geo, platform_mat );

var wireframe_geo = new THREE.EdgesGeometry( platform.geometry );
var wireframe_mat = new THREE.LineBasicMaterial( { color: 0x000000, linewidth: 4 } );
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

// Target

var targets = [];

function createTarget(count){
  for (var i = 0; i < count; i++) {
    var target_geo = new THREE.SphereGeometry(0.3, 0.3, 0.3);
    var target_mat = new THREE.MeshBasicMaterial( { color: 0x00DD8F} );
    var target = new THREE.Mesh( target_geo, target_mat );

    target.position.y += 0.5;

    var randomTargetX = getRandomInt(-2, 2);
    var randomTargetY = getRandomInt(-2, 2);

    target.position.x = randomTargetX;
    target.position.z = randomTargetY;

    target.name = "target_"+i;

    console.log(randomTargetX, randomTargetY);
    var temp_target = [randomTargetX, randomTargetY];
    targets.push(temp_target)
    scene.add( target );
  }
}

// Actor
var actor_geo = new THREE.BoxGeometry(0.3, 0.3, 0.3);
var actor_mat = new THREE.MeshBasicMaterial( { color: 0xffffff} );
var actor = new THREE.Mesh( actor_geo, actor_mat );

actor.position.y += 0.5;
actor.name = "actor";

scene.add( actor );

camera.position.z = 7;

// Day system
var moment = 0;
var day = 0;
const dayTime = 10000;
function passDay(){
  day += 1;
  createTarget(0);
  console.log('Days passed: ', day)
}
createTarget(2);

const actorSpeed = 500;
const actorEnergy = 1000;

var minWayTarget = 5;
var minWayTargetIndex = 0;


for (var i = 0; i < targets.length; i++) {
  var checkWayValue = Math.sqrt(Math.pow(targets[i][0], 2) + Math.pow(targets[i][1], 2));
  if(checkWayValue < minWayTarget){
    minWayTarget = checkWayValue;
    minWayTargetIndex = i;
  }

}
console.log('minWayTargetIndex: ', minWayTargetIndex);
var nearTargetX = targets[minWayTargetIndex][0];
var nearTargetY = targets[minWayTargetIndex][1];



// Move actors



// Animation cycle
function animate() {


  if(actor.position.x < targets[minWayTargetIndex][0]){
    actor.position.x += 0.01;
  } else {
    actor.position.x -= 0.01;
  }
  if(actor.position.z < targets[minWayTargetIndex][1]){
    actor.position.z += 0.01;
  } else {
    actor.position.z -= 0.01;
  }


  if(moment > actorEnergy){
    var selectedObject = scene.getObjectByName('actor');
    scene.remove( selectedObject );
    actor.position.x -= 1000;
    actor.position.z -= 1000;
  }
  if(Math.abs(Math.abs(actor.position.x) - Math.abs(targets[minWayTargetIndex][0])) < 0.01 && Math.abs(Math.abs(actor.position.z) - Math.abs(targets[minWayTargetIndex][1])) < 0.01){

    // Removing targets
    var selectedObject = scene.getObjectByName('target_'+minWayTargetIndex);
    scene.remove( selectedObject );

  }



	requestAnimationFrame( animate );
  moment += 1;
  if (moment % dayTime == 0){
    passDay();
  }
	renderer.render( scene, camera );
}
animate();


// Control scene
var canvas = renderer.domElement;

var switch_mode = false;
document.addEventListener("keydown", event => {
  if (event.isComposing || event.keyCode === 32) {
    if(!switch_mode){
      canvas.addEventListener('mousemove', onMouseMove);
      switch_mode = true;
    } else {
      canvas.removeEventListener('mousemove', onMouseMove);
      switch_mode = false;
    }
  }

});


function onMouseMove(event) {
  camera_pivot.rotation.y -= event.movementX * 0.004;
  camera_pivot.rotation.x -= event.movementY * 0.004;
}
