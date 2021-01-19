<script>
  import { onMount } from 'svelte'

  onMount(function(){




  })

  const onInit = () => {





    setTimeout( function() {





      const visibleHeightAtZDepth = ( depth ) => {
        const camera = AFRAME.scenes[0].camera;
        // compensate for cameras not positioned at z=0
        const cameraOffset = camera.position.z;
        if ( depth < cameraOffset ) depth -= cameraOffset;
        else depth += cameraOffset;

        // vertical fov in radians
        const vFOV = camera.fov * Math.PI / 180; 

        // Math.abs to ensure the result is always positive
        return 2 * Math.tan( vFOV / 2 ) * Math.abs( depth );
      };

      const visibleWidthAtZDepth = ( depth ) => {
        const camera = AFRAME.scenes[0].camera;
        const height = visibleHeightAtZDepth( depth, camera );
        let width = height * camera.aspect;
        return width;
      };

      console.log(visibleWidthAtZDepth(-1), visibleHeightAtZDepth(-1), -1);



      var el2 = document.querySelector('#item3d-2');
      el2.body.applyImpulse( new CANNON.Vec3(1.1, -2, 0) );
  
      var el1 = document.querySelector('#item3d-1');
      el1.body.applyImpulse( new CANNON.Vec3(-2, 2, 0) );


    }, 5000)


  }   


</script>

<a-scene on:loaded={onInit} embedded vr-mode-ui="enabled: false" physics="debug: false; gravity: 0; iterations: 3; friction: 0.1; restitution: 1.5">

  <a-assets>
    <a-asset-item id="model-1" src="https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/WaterBottle/glTF-pbrSpecularGlossiness/WaterBottle.gltf"
      crossOrigin="anonymous"></a-asset-item>
    <a-asset-item id="model-2" src="https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/Duck/glTF/Duck.gltf"
      crossOrigin="anonymous"></a-asset-item>
  </a-assets>

  <a-entity camera position="0 1.6 0"></a-entity>

  <a-entity light="type: ambient; color: #CCC; intensity: 1.5" ></a-entity>
  <a-entity light="color: #AFA; intensity: 2.5" position="0 0 -0.5" ></a-entity>


  <a-gltf-model id="item3d-2" src="#model-1" dynamic-body mass="1" position="-1 1.5 -1.5" scale="3 3 3" linearDamping="0" angularDamping="0" ></a-gltf-model>
  <a-gltf-model id="item3d-1" src="#model-2" dynamic-body mass="1" position="1 1.5 -1.5" scale=".3 .3 .3" linearDamping="0" angularDamping="0" ></a-gltf-model>

  <a-plane position="0 0 -3" rotation="-90 0 0"      width="4" height="4" material="opacity: 0.0; transparent: true" static-body></a-plane>
  <a-plane position="1.69 1.5 -3" rotation="0 90 0"  width="4" height="4" material="opacity: 0.0; transparent: true" static-body></a-plane>
  <a-plane position="0 3.34 -3" rotation="-90 0 0"   width="4" height="4" material="opacity: 0.0; transparent: true" static-body></a-plane>
  <a-plane position="-1.69 1.5 -3" rotation="0 90 0" width="4" height="4" material="opacity: 0.0; transparent: true" static-body></a-plane>
  <a-plane position="0.5 1.5 -3" rotation="0 0 0" width="4" height="4"    material="opacity: 0.0; transparent: true" static-body></a-plane>
  <a-plane position="0.5 1.5 -1" rotation="0 0 0" width="4" height="4"    material="opacity: 0.0; transparent: true" static-body></a-plane>

</a-scene>

<style lang="scss">
  :global(.a-canvas) {
    height: 100%;
    width: 100%;
    top:0;
    position: fixed;
    z-index: 1;
  }
</style>