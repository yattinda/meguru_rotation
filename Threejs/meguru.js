(function(){
    'use strict';

    var scene;
    var object_cube;
    var light_ambient , light_direction;
    var camera;
    var renderer;
    var width = window.innerWidth;
    var height = window.innerHeight;

    let loader = new THREE.TextureLoader();
    loader.load("https://github.com/nekozuki0114/meguru_rotation/blob/master/Threejs/meguru.png", function(texture){
        init(texture);
        animate();
    });
    function init(texture) {
        // scene ---------------------------------------------------
        // シーンに対してオブジェクト、ライト、カメラを配置する。
        scene = new THREE.Scene();

        // scene.fog : 霧効果・・・奥に行くほど霧がかって映る
        // scene.fog = new THREE.Fog(0x990000, 1000,2000);


        // object -----------------------------------------------
        // THREE.Mesh ： ポリゴンメッシュオブジェクトを生成
        // new THREE.Mesh(Geometry：形,Material：素材)
        object_cube = new THREE.Mesh(
            new THREE.BoxGeometry(128, 128, 128),
            new THREE.MeshLambertMaterial({map: texture})
        );
        object_cube.position.set(0,0,0);
        scene.add(object_cube);

        // light -----------------------------------------------

        // 環境光 ************
        // THREE.AmbientLight ： 環境光・・・オブジェクトの全ての面を均等に照らすライト。影が出来ない。
        // new THREE.AmbientLight(光の色,光の強さ[省略可])
        light_ambient = new THREE.AmbientLight( 0xffffff , 1 );
        scene.add(light_ambient);

        // 平行光源 ************
        // THREE.DirectionalLight ： 平行光源・・・特定の方向へのライト。影が出来る。
        // new THREE.DirectionalLight(光の色,光の強さ[省略可])
        light_direction = new THREE.DirectionalLight( 0xffffff, 1 );
        // DirectionalLightの位置
        light_direction.position.set( 50, 10, 5);
        // DirectionalLightの対象オブジェクト
        light_direction.target = object_cube;
        scene.add(light_direction);

        // camera --------------------------------------------------
        camera = new THREE.PerspectiveCamera(45, width/height, 1, 1000);
        camera.position.set(200,100,300);
        camera.lookAt(scene.position);

        // renderer ------------------------------------------------
        renderer = new THREE.WebGLRenderer({antialias: true});
        renderer.setSize(width,height);
        renderer.setClearColor(0xefefef);
        renderer.setPixelRatio(window.devicePixelRatio);
        document.getElementById("meguru").appendChild(renderer.domElement);
        renderer.render(scene, camera);
    }

    function animate() {
        // window.requestAnimationFrame:再描画のタイミングで指定した関数が呼び出される
        // https://developer.mozilla.org/ja/docs/Web/API/Window/requestAnimationFrame
        requestAnimationFrame( animate );
        render();
    }

    function render() {

        object_cube.rotation.x += 0.01;	// x軸方向に回転
        object_cube.rotation.y += 0.01;	// y軸方向に回転
        object_cube.rotation.z += 0.01;	// z軸方向に回転

        //console.log("object_cube.rotation : " , object_cube.rotation);

        // 再描画
        renderer.render(scene, camera);

    }

})();