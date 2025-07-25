"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"

interface Logo3DProps {
  isAnimating?: boolean
}

export default function Logo3D({ isAnimating = false }: Logo3DProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Setup
    const container = containerRef.current
    const scene = new THREE.Scene()

    // Camera
    const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000)
    camera.position.z = 5

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    })
    renderer.setSize(container.clientWidth, container.clientHeight)
    renderer.setPixelRatio(window.devicePixelRatio)
    container.appendChild(renderer.domElement)

    // Create brain sphere geometry
    const sphereGeometry = new THREE.SphereGeometry(1, 32, 32)

    // Create neural network lines
    const neuralNetworkGroup = new THREE.Group()

    // Create random points for neural network
    const points = []
    for (let i = 0; i < 100; i++) {
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      const radius = 0.8 + Math.random() * 0.4

      const x = radius * Math.sin(phi) * Math.cos(theta)
      const y = radius * Math.sin(phi) * Math.sin(theta)
      const z = radius * Math.cos(phi)

      points.push(new THREE.Vector3(x, y, z))
    }

    // Create connections between points
    for (let i = 0; i < points.length; i++) {
      for (let j = i + 1; j < points.length; j++) {
        if (points[i].distanceTo(points[j]) < 0.8) {
          const lineGeometry = new THREE.BufferGeometry().setFromPoints([points[i], points[j]])

          // Randomly choose a color
          const colors = [
            new THREE.Color(0x06b6d4), // cyan
            new THREE.Color(0xa855f7), // purple
            new THREE.Color(0xec4899), // pink
          ]
          const color = colors[Math.floor(Math.random() * colors.length)]

          const lineMaterial = new THREE.LineBasicMaterial({
            color: color,
            transparent: true,
            opacity: 0.6,
          })

          const line = new THREE.Line(lineGeometry, lineMaterial)
          neuralNetworkGroup.add(line)
        }
      }
    }

    // Add neural network to scene
    scene.add(neuralNetworkGroup)

    // Create node points
    const nodeGeometry = new THREE.SphereGeometry(0.03, 8, 8)

    points.forEach((point) => {
      // Randomly choose a color
      const colors = [
        new THREE.Color(0x06b6d4), // cyan
        new THREE.Color(0xa855f7), // purple
        new THREE.Color(0xec4899), // pink
      ]
      const color = colors[Math.floor(Math.random() * colors.length)]

      const nodeMaterial = new THREE.MeshBasicMaterial({
        color: color,
        transparent: true,
        opacity: 0.8,
      })

      const node = new THREE.Mesh(nodeGeometry, nodeMaterial)
      node.position.copy(point)
      neuralNetworkGroup.add(node)
    })

    // Create outer sphere (brain container)
    const outerSphereGeometry = new THREE.SphereGeometry(1.1, 32, 32)
    const outerSphereMaterial = new THREE.MeshPhongMaterial({
      color: 0xffffff,
      emissive: 0x222222,
      specular: 0xffffff,
      shininess: 100,
      transparent: true,
      opacity: 0.1,
      side: THREE.DoubleSide,
    })

    const outerSphere = new THREE.Mesh(outerSphereGeometry, outerSphereMaterial)
    scene.add(outerSphere)

    // Add lights
    const ambientLight = new THREE.AmbientLight(0x404040)
    scene.add(ambientLight)

    const pointLight1 = new THREE.PointLight(0x06b6d4, 2, 10) // cyan
    pointLight1.position.set(2, 2, 2)
    scene.add(pointLight1)

    const pointLight2 = new THREE.PointLight(0xec4899, 2, 10) // pink
    pointLight2.position.set(-2, -2, 2)
    scene.add(pointLight2)

    // Animation
    let rotationSpeed = 0.01
    let targetRotationSpeed = rotationSpeed

    const animate = () => {
      requestAnimationFrame(animate)

      // Smooth rotation speed transition
      rotationSpeed += (targetRotationSpeed - rotationSpeed) * 0.05

      // Rotate neural network
      neuralNetworkGroup.rotation.y += rotationSpeed
      neuralNetworkGroup.rotation.x += rotationSpeed * 0.3

      // Rotate outer sphere in opposite direction
      outerSphere.rotation.y -= rotationSpeed * 0.2
      outerSphere.rotation.x -= rotationSpeed * 0.1

      renderer.render(scene, camera)
    }

    animate()

    // Handle window resize
    const handleResize = () => {
      if (!containerRef.current) return

      camera.aspect = container.clientWidth / container.clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(container.clientWidth, container.clientHeight)
    }

    window.addEventListener("resize", handleResize)

    // Update rotation speed based on isAnimating prop
    const updateRotationSpeed = () => {
      targetRotationSpeed = isAnimating ? 0.05 : 0.01
    }

    updateRotationSpeed()

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize)
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement)
      }
    }
  }, [isAnimating])

  return <div ref={containerRef} className="w-full h-full" />
}
