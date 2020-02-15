var camera, scene, renderer;
var geometry, material, mesh, points;

init();
makeStuff();
animate();

function init() {

    camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z=1;
   // camera.lookAt( 0, 0, 0 );
    //camera.position.set( 0, 0, 100 );

    scene = new THREE.Scene();

    geometry = new THREE.BoxGeometry( 0.4, 0.2, 0.2 );
    material = new THREE.MeshNormalMaterial();
    
    mesh = new THREE.Mesh( geometry, material );
    mesh.position.set(0.3,0.3,0.3);
    scene.add( mesh );

    var axesHelper = new THREE.AxesHelper( 5 );
    scene.add( axesHelper );


    renderer = new THREE.WebGLRenderer( { antialias: true } );
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );

}

function makeStuff() {
    
    material = new THREE.LineBasicMaterial( { color: 0xffffff } );

    points = [];
    points.push( new THREE.Vector3( -0.25, 0, 0 ) );
    points.push( new THREE.Vector3( 0, 0.25, 0 ) );
    points.push( new THREE.Vector3( 0.25, 0, 0 ) );
    
    geometry = new THREE.BufferGeometry().setFromPoints( points );
    var line = new THREE.Line( geometry, material );
    scene.add(line);

    }

function animate() {

    requestAnimationFrame( animate );

    mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.02;

    renderer.render( scene, camera );

}
