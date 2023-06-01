const Movie = require("./movieTable");

exports.addMovie = async(movieObj) => {
    try {
        await Movie.create(movieObj);
    } catch (error) {
        console.log(error);
    }
};

exports.listMovies = async () => {
    try {
        return await Movie.findAll();
    } catch (error) {
        console.log(error);
    }
};

exports.updateMovie = async (movieObj) => {
    try {
        await Movie.update({ title: movieObj.newTitle, actor: movieObj.newActor }, {
            where: {
                title: movieObj.title
            }
        });
    } catch (error) {
        console.log(error);
    }
};

exports.deleteMovie = async (movieObj) => {
    try {
        await Movie.destroy({
            where: {
                title: movieObj.title
            }
        });
    } catch (error) {
        console.log(error);
    }
};

exports.findMovie = async (movieObj) => {
    try {
        const result = await Movie.findOne({
            where: {
                title: movieObj.title
            }
        });
        console.log(result);
    } catch (error) {
        console.log(error);
    }
};


