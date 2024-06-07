// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');

// const app = express();
// // app.use(cors());
// app.use(cors({
//     origin: 'http://localhost:3000', // Replace with your frontend URL
//     optionsSuccessStatus: 200 // Some legacy browsers (IE11, various SmartTVs) choke on 204
//   }));
// app.use(express.json());

// // mongoose.connect('mongodb://localhost:27017/tictactoe', { useNewUrlParser: true, useUnifiedTopology: true });
// mongoose.connect('mongodb://localhost:27017/tictactoe', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     serverSelectionTimeoutMS: 5000,
// })
// .then(() => console.log('MongoDB connected...'))
// .catch(err => console.error('MongoDB connection error:', err));

// const resultSchema = new mongoose.Schema({
//     winner: { type: String, enum: ['X', 'O', 'DRAW'], required: true },
//     date: { type: Date, default: Date.now }
// });

// const gameSchema = new mongoose.Schema({
//     player1: { type: String, required: true },
//     player2: { type: String, required: true },
//     results: [resultSchema],
//     date: { type: Date, default: Date.now },
//     X: { type: Number, default: 0 },
//     O: { type: Number, default: 0 },
//     DRAW: { type: Number, default: 0 }
// });

// const Game = mongoose.model('Game', gameSchema);

// app.get('/api/games', async (req, res) => {
//     const games = await Game.find();
//     res.json(games);
// });

// app.post('/api/games', async (req, res) => {
//     const newGame = new Game(req.body);
//     newGame.date = new Date();
//     await newGame.save();
//     res.json(newGame);
// });

// app.put('/api/games/:id/results', async (req, res) => {
//     try {
//         const game = await Game.findById(req.params.id);
//         if (!game) {
//             return res.status(404).send('Game not found');
//         }

//         const { winner } = req.body;
//         game.results.push({ winner, date: new Date() });

//         if (winner === 'X') {
//             game.X += 1;
//         } else if (winner === 'O') {
//             game.O += 1;
//         } else if (winner === 'DRAW') {
//             game.DRAW += 1;
//         }

//         await game.save();

//         res.json(game);
//     } catch (error) {
//         res.status(500).send(error.message);
//     }
// });


// app.listen(5000, () => console.log('Server started on port 5000'));
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
const dbURI = process.env.MONGODB_URI || 'http://localhost:5000';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Sample Route
app.get('/api/games', (req, res) => {
  res.send('API is working');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
