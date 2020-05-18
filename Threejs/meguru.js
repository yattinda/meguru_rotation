// wait loading
window.addEventListener('load', init);
function init() {
  
  // set window's size
  const width = window.innerWidth;
  const height = window.innerHeight;
  let rot = 0;
  
  // create a renderer
  const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#meguru'),
    antialias:true
  });
  renderer.setSize(width, height);
  
  // create a scene
  const scene = new THREE.Scene({});
  
  // create a camera
  const camera = new THREE.PerspectiveCamera(45, width / height);
  camera.position.set(50,50,5000);
  
  // create a line
  const line_material=new THREE.LineBasicMaterial({ color:0x000000 });
  var line_geometry=new THREE.Geometry();
  //回を描画
  line_geometry.vertices.push(
      new THREE.Vector3(0,0,0),
      new THREE.Vector3(100,0,0),
      new THREE.Vector3(100,100,0),
      new THREE.Vector3(0,100,0),
      new THREE.Vector3(0,0,0),
      new THREE.Vector3(0,0,100),
      new THREE.Vector3(100,0,100),
      new THREE.Vector3(100,100,100),
      new THREE.Vector3(0,100,100),
      new THREE.Vector3(0,0,100),
      new THREE.Vector2(0,0,0), //線を切る用
      new THREE.Vector3(0,100,100),
      new THREE.Vector3(0,100,0),
      new THREE.Vector2(0,0,0), //線を切る用
      new THREE.Vector3(100,100,100),
      new THREE.Vector3(100,100,0),
      new THREE.Vector2(0,0,0), //線を切る用
      new THREE.Vector3(100,0,100),
      new THREE.Vector3(100,0,0),
      new THREE.Vector2(0,0,0), //線を切る用
      new THREE.Vector3(25,25,0),
      new THREE.Vector3(75,25,0),
      new THREE.Vector3(75,75,0),
      new THREE.Vector3(25,75,0),
      new THREE.Vector3(25,25,0),
      new THREE.Vector2(0,0,0), //線を切る用
      new THREE.Vector3(25,25,100),
      new THREE.Vector3(75,25,100),
      new THREE.Vector3(75,75,100),
      new THREE.Vector3(25,75,100),
      new THREE.Vector3(25,25,100),
      new THREE.Vector2(0,0,0), //線を切る用
      new THREE.Vector3(100,75,25),
      new THREE.Vector3(100,75,75),
      new THREE.Vector3(100,25,75),
      new THREE.Vector3(100,25,25),
      new THREE.Vector3(100,75,25),
      new THREE.Vector2(0,0,0), //線を切る用
      new THREE.Vector3(0,75,25),
      new THREE.Vector3(0,75,75),
      new THREE.Vector3(0,25,75),
      new THREE.Vector3(0,25,25),
      new THREE.Vector3(0,75,25),
      new THREE.Vector2(0,0,0), //線を切る用
      new THREE.Vector3(25,100,25),
      new THREE.Vector3(25,100,75),
      new THREE.Vector3(75,100,75),
      new THREE.Vector3(75,100,25),
      new THREE.Vector3(25,100,25),
      new THREE.Vector2(0,0,0), //線を切る用
      new THREE.Vector3(25,0,25),
      new THREE.Vector3(25,0,75),
      new THREE.Vector3(75,0,75),
      new THREE.Vector3(75,0,25),
      new THREE.Vector3(25,0,25),
  );
  var newline=new THREE.Line(line_geometry,line_material);
  scene.add(newline);
  
  tick();
  
  function tick() {          
    
    // rotate camera
    rot+=1.5;
    const radian=Math.PI/180*rot;
    camera.position.x=500*Math.sin(radian);
    camera.position.z=500*Math.cos(radian);

    camera.lookAt(0,0,0);
    
    // Rendering
    renderer.render(scene, camera);
    renderer.setClearColor(new THREE.Color('white'));//背景色の設定
    requestAnimationFrame(tick);
  }
  
}