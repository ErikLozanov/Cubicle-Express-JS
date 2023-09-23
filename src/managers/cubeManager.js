const uniqid = require('uniqid');
const cubes = [
    {
        id: '3f3pf0k8nclmw5odud',
     name: 'Mirror Cube',
     description: 'Cool Mirror Cube',
     imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Mirror_Cube_solved.png/1200px-Mirror_Cube_solved.png',
     difficultyLevel: 4
    },
    {
        id: '327pf0k8nclmw5odud',
     name: 'Rubik Classic',
     description: 'Evergreen',
     imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/61/Rubiks_cube_solved.jpg',
     difficultyLevel: 2
    }
];

exports.getAll = () => cubes.slice();

exports.getOne = (cubeId) => cubes.find(x => x.id == cubeId);

exports.create = (cubeData) => {

    const newCube = {
        id: uniqid(),
        ...cubeData
    };

    cubes.push(newCube);



    return newCube;
}
