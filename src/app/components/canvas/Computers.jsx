"use client"

import { Suspense, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
// import { OrbitControlss, Preload, useGLTF } from '@react-three/drei'
import CanvasLoader from '../Loader';
import { useGLTF } from 'drei';

const Computers = () => {
  const computer3d = useGLTF('./desktop_pc/scene.gltf');

  return (
    <div>Computers</div>
  )
}

export default Computers