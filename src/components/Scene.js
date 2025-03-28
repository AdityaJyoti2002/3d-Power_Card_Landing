/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 scene.gltf 
Author: Ligretix (https://sketchfab.com/ligretix)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/power-bank-cyber-fa95c65b6cdd4c4d8158cb7a5fa5422e
Title: Power Bank "Cyber"
*/

import React, {  useLayoutEffect, useState, useEffect } from "react";
import { useGLTF } from '@react-three/drei'
import gsap from "gsap";
import { useThree } from "@react-three/fiber";

export default function Model(props) {
  const { nodes, materials } = useGLTF('/scene.gltf');
  let camera = useThree((state) => state.camera);
  let scene = useThree((state) => state.scene);

  // State to track window width
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useLayoutEffect(() => {
    camera.position.set(0, 2, 6);
    console.log("Loaded materials:", materials);
    materials.DefaultMaterial.color.set("#9BB5CE");


    let fov = (1400 * 18) / windowWidth;
    camera.fov = fov;
    camera.updateProjectionMatrix();

    let mm = gsap.matchMedia();

    mm.add(
      {
        isDesktop: `(min-width: 48em)`,
        isMobile: `(max-width:48em)`,
      },
      (context) => {
        let { isDesktop, isMobile } = context.conditions;

        let t1 = gsap.timeline({
          scrollTrigger: {
            trigger: "#phone-model",
            start: "top+=200 top",
            endTrigger: "#battery",
            end: "top top",
            scrub: 1,
          },
        });

        t1.fromTo(camera.position, { y: 2 }, { y: 0 })
          .to(scene.rotation, { y: 0.8 })
          .to(scene.rotation, { y: 3 })
          .to(scene.rotation, { z: 1.58 }, "key1")
          .to(camera.position, { z: 4 }, "key1")
          .to(scene.rotation, { y: 0, z: 0 }, "key2")
          .to(camera.position, { z: 6, x: isDesktop ? -1 : 0 }, "key2")
          .to(scene.rotation, { z: 0, y: 6.3 }, "key3")
          .to(camera.position, { x: isDesktop ? 0.8 : 0, y: 0 }, "key3");

        if (isMobile) {
          camera.fov = 20;
          camera.updateProjectionMatrix();
        }

        return () => {
          if (t1) t1.kill();
        };
      }
    );
  }, [camera, scene, materials, windowWidth]);
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={1.667}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.04}>
          <mesh geometry={nodes.Power_Bank_DefaultMaterial_0.geometry} material={materials.DefaultMaterial} position={[0, 5, 0]} rotation={[0, 0, -Math.PI / 2]} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/scene.gltf')
