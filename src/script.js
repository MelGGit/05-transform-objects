import "./style.css"
import * as THREE from "three"

// Canvas
const canvas = document.querySelector("canvas.webgl")

// Scene
const scene = new THREE.Scene()

/**
 * Objects
 */

const group = new THREE.Group()
group.position.y = 1
group.scale.y = 2
group.rotation.y = 1
scene.add(group)

const cube1 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0xff0000 })
)
const cube2 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0x00ff00 })
)
const cube3 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0x0000ff })
)

cube2.position.set(-2, 0, 0)
cube3.position.set(2, 0, 0)

group.add(cube1)
group.add(cube2)
group.add(cube3)

// Position
// mesh.position.x = 0.7
// mesh.position.y = -0.6
// mesh.position.z = 1

// same as setting all 3 psoition separetelly
// mesh.position.set(0.7, -0.6, 1)

// Scale
// mesh.scale.x = 2
// mesh.scale.y = 0.5
// mesh.scale.z = 0.5
// mesh.scale.set(2, 0.5, 0.5)

// Rotation
// both rotaion and quaternion are interchangeable
// first thought is around which duration you want to rotate?
// half rotation is Math.PI
// mesh.rotation.reorder("YXZ")
// mesh.rotation.x = Math.PI * 0.25
// mesh.rotation.y = Math.PI * 0.25

//Axes Helper length is 1 by default and can be increased in the AxesHelper(2)
const axesHelper = new THREE.AxesHelper()
scene.add(axesHelper)

//gives position between center of scene and object
// console.log(mesh.position.length())

//reduces verctor length to 1
// mesh.position.normalize()
// console.log(mesh.position.length())

/**
 * Sizes
 */
const sizes = {
  width: 800,
  height: 600,
}

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3

scene.add(camera)

// camera.lookAt(new THREE.Vector3(3, 0, 0))
// camera.lookAt(mesh.position)

// console.log(mesh.position.distanceTo(camera.position))

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)
