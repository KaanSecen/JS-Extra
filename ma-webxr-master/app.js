// voeg controls toe (teleport & WASD controls)
const controls = new Controls(50);
controls.enableMovement();

// create a model
const minecraftModel = new Model('assets/models/minecraft/scene.gltf');
minecraftModel.setPosition(0.502, 1.540, -1.106);
minecraftModel.setScale(0.040, 0.023, 0.022);
minecraftModel.setRotation(0.40, -36.95, 0);

// create a model
const cuberoom = new Model('assets/models/cube-room/cube-room.gltf');
cuberoom.setPosition(0.262, 1.064, -1.058);
cuberoom.setScale(0.122, 0.202, 0.244);
cuberoom.setRotation(0, -36.95, 0);


// create a primitive (sphere)
const sphere = new Sphere();
sphere.setColor('green');
sphere.setRadius(0.5);
sphere.setPosition(-3, 0, -5);

// create some text
const testText = new Text('Mediacollege Amsterdam WebXR');
testText.setPosition(1.5, 0, -5);
testText.setFontsize(10);
testText.setScale(1.241, 3.215, 5)
testText.setColor('gold');

// create an image
const image = new XRImage('assets/images/sampleImage.jpg');
image.setPosition(0.159, 1.539, -1.118);
image.setScale(0.406, 0.413, 1)

const image2 = new XRImage('assets/images/Lisse-049.jpg');
image.setPosition(-0.029, 1.248, -3.815);

// create a 360 image
const image360 = new Sky('assets/360_world.jpg');

const spotLight = new SpotLight();
spotLight.setPosition(-3.39382, 4.72931, 1.37905);
spotLight.setTarget(minecraftModel);

// listen for an event
minecraftModel.addEventListener('click', () => console.log('je klikt op mij'));