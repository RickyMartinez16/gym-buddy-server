const express = require('express');
const { Sequelize, DataTypes} = require('sequelize');

const sequelize = new Sequelize('gymbuddy', 'user', 'password', {
    host: 'localhost',
    dialect: 'postgres'
  });

  const Exercise = sequelize.define('Exercise', {
    // Model attributes are defined here
    muscleGroup: {
        type: DataTypes.STRING,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    link: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    }
  }, {
    // Other model options go here
  });

const app = express();
const exercises = [{
    "muscleGroup": "arms",
    "exercise": "curls",
    "link": "youtube.com",
    "description": "lift dumbells to get chicks"
},
{
    "muscleGroup": "legs",
    "exercise": "squats",
    "link": "youtube.com",
    "description": "big meaty thighs"
},
{
    "muscleGroup": "chest",
    "exercise": "bench press",
    "link": "youtube.com",
    "description": "chest day is the best day"
},
{
    "muscleGroup": "shoulders",
    "exercise": "shoulder press",
    "link": "youtube.com",
    "description": "shoulder boulders"
},
{
    "muscleGroup": "back",
    "exercise": "lat pull down",
    "link": "youtube.com",
    "description": "gives you wings so you can fly"
},
{
    "muscleGroup": "core / cardio",
    "exercise": "planks",
    "link": "youtube.com",
    "description": "one day you will have a 6 pack i promise"
}]
app.get('/', (req, res) => {
    res.send({"message": "hello, world"});
  });

app.get('/:muscleGroup', (req, res) => {
    const muscleGroup = req.params.muscleGroup
    const exercisesForMuscleGroup = exercises.filter(e => e.muscleGroup.toLowerCase() === muscleGroup.toLowerCase())
    res.send(exercisesForMuscleGroup);
})

app.listen(3000, () => console.log('Example app is listening on port 3000.'));