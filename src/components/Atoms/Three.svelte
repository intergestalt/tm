<script>
  import { onMount } from 'svelte'
  import { 
    Scene, 
    PerspectiveCamera,
    WebGLRenderer,
    DirectionalLight,
    Vector3,
    AmbientLight,
  } from 'three';
  import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

  import { styleVars } from '/helper.js'

  export let zIndex = 0;

  let isWebGLAvailable = true
  let canvas = null
  const speed = 0.008

  const models = [
    /*{
      path: "https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/WaterBottle/glTF-pbrSpecularGlossiness/WaterBottle.gltf",
      name: "bottle",
      position: new Vector3(0, 0, 0),
      vector: new Vector3(0.25, -1, 0),
      rotation: {x:0, y:0.01, z:0},
      scale: 1
    },*/
    /*{
      path: "https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/Duck/glTF/Duck.gltf",
      name: "duck",
      position: new Vector3(0, 0, 1),
      vector: new Vector3(0.3, 1, 0),
      rotation: {x:0, y:0.01, z:0},
      scale: .2
    },*/
    {
      path: "https://minio.intergestalt.dev/public/object_01.glb",
      name: "object_01",
      position: new Vector3(0, 0, 1),
      vector: new Vector3(0.3, 1, 0),
      rotation: {x:0, y:0.01, z:0},
      scale: .2
    }    
  ]

  const activeObjects = []

  const loader = new GLTFLoader();

  function modelLoader(url) {
    return new Promise((resolve, reject) => {
      loader.load(url, data=> resolve(data), null, reject);
    });
  }

  onMount( async () => {

    // create scene
    var scene = new Scene();

    // create camera
    const fov = 75;
    const aspect = 2;  // the canvas default
    const near = 0.1;
    const far = 5;
    const cameraZ = 2;
    const camera = new PerspectiveCamera(fov, aspect, near, far);
    camera.position.z = 2

    // create renderer
    var renderer = new WebGLRenderer( { canvas, alpha: true } );

    // add light
    const color = 0xFFFFFF;
    const intensity = 1;
    const light = new DirectionalLight(color, intensity);
    light.position.set(-1, 0, 4);
    scene.add(light);
    const ambientLight = new AmbientLight( 0x404040 ); // soft white light
    scene.add( ambientLight );

    // add objects
    for (let model of models) {
      try {
        const gltf = await modelLoader(model.path)
        const group = gltf.scene
        group.position.set(model.position)
        group.scale.set(model.scale, model.scale, model.scale)
        scene.add(group)
        activeObjects.push({
          handle: group,
          vector: model.vector,
          rotation: model.rotation,
        })
      } catch(error) {
        console.warn("loading of 3d " + model.name + " failed")
      }
    }
    console.log(activeObjects)
    

/*
    loader.load(
      model1Path,
      ( gltf ) => {
        // called when the resource is loaded
        cube = scene.add(gltf.scene)
      },
      ( xhr ) => {
        // called while loading is progressing
        console.log( `${( xhr.loaded / xhr.total * 100 )}% loaded` );
      },
      ( error ) => {
        // called when loading has errors
        console.error( 'loading 3d model failed', error );
      },
    );*/


    // define responsivity function
    function resizeRendererToDisplaySize(renderer) {
      const canvas = renderer.domElement;
      const pixelRatio = window.devicePixelRatio;
      const width  = canvas.clientWidth  * pixelRatio | 0;
      const height = canvas.clientHeight * pixelRatio | 0;
      const needResize = canvas.width !== width || canvas.height !== height;
      if (needResize) {
        renderer.setSize(width, height, false);
      }
      return needResize;
    }    

    // define render function
    function render(time) {
      time *= 0.001;

      // apply resize if necessary
      if (resizeRendererToDisplaySize(renderer)) {
        const canvas = renderer.domElement;
        camera.aspect = canvas.clientWidth / canvas.clientHeight;
        camera.position.z = cameraZ * Math.atan(Math.min(canvas.clientHeight / canvas.clientWidth, canvas.clientWidth / canvas.clientHeight))
        camera.updateProjectionMatrix();
        camera.updateMatrixWorld();
        for (let object of activeObjects) {
          //console.log(object)
          object.handle.position.x=0
          object.handle.position.y=0
        }
      }

      // change values if boundaries are hit
      for (let object of activeObjects) {
        const pos = object.handle.position.clone().project(camera)
        let bounced = false
        if (pos.y < -0.92) { bounced = true; object.vector = new Vector3( object.vector.x, -object.vector.y, 0) }
        if (pos.y >  0.92) { bounced = true; object.vector = new Vector3( object.vector.x, -object.vector.y, 0) }
        if (pos.x < -0.92) { bounced = true; object.vector = new Vector3(-object.vector.x,  object.vector.y, 0) }
        if (pos.x >  0.92) { bounced = true; object.vector = new Vector3(-object.vector.x,  object.vector.y, 0) }

        // change rotation from bounce
        if (bounced) {
          object.rotation.x += Math.random() * 0.001 - 0.0005
          object.rotation.y += Math.random() * 0.001 - 0.0005
          object.rotation.z += Math.random() * 0.001 - 0.0005
        }

        // apply rotation and translation
        //object.handle.rotation.x += object.rotation.x
        object.handle.rotation.y += object.rotation.y
        object.handle.rotation.z += object.rotation.z
        object.handle.position.add(object.vector.clone().multiplyScalar(speed))
      }


      renderer.render(scene, camera);

      //console.log(cube.position.clone().project(camera))

      requestAnimationFrame(render);
    }


    // start
    requestAnimationFrame(render); // TODO unmount
    
  })

</script>

{#if isWebGLAvailable}
  <canvas bind:this={canvas} style={styleVars({zIndex})}></canvas>
{/if}

<style>
  canvas {
    width: 100%;
    height: 100%;
    display: block;
    position: fixed;
    top:0;
    z-index: var(--zIndex);
    pointer-events: none;
  }
</style>