const yargs = require("yargs");
const { sequelize } = require("./db/connection");
// Imports for CRUD functions
const { addMovie, listMovies, updateMovie, deleteMovie, findMovie } = require("./movie/movieMethods");

const app = async (yargsObj) => {
    try {
        await sequelize.sync();
        if (yargsObj.add) {
            // Add movie to database
            await addMovie({ title: yargsObj.title, actor: yargsObj.actor });
        } else if (yargsObj.list) {
            // List all movies
            console.log(await listMovies());
        } else if (yargsObj.findMovie) {
            // Find a movie by title
            await findMovie({ title: yargsObj.title });
        } else if (yargsObj.update) {
            // Update a movie
            await updateMovie(yargsObj);
        } else if (yargsObj.delete) {
            // Delete a movie
            await deleteMovie(yargsObj);
        } else {
            console.log("Incorrect command");
        }
    } catch (error) {
        console.log(error);
    }
}

app(yargs.argv);

// node src/server.js --list
// node src/server.js --add --title="Happy Gilmore" --actor="Adam Sandler"
// node src/server.js --findMovie --title="Big Daddy"
// node src/server.js --update --title="Happy Gilmore" --newTitle="Big Daddy"
// node src/server.js --delete --title="Big Daddy"