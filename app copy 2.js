//initialize express web framework
const express = require("express")
const app = express()

app.use(express.json());

//list of target keywords
const wordsToReplace = ["Google", "Microsoft", "Amazon", "Deloitte", "Oracle"];

const stringApi = function(input) {
    let output = input;
    for (let word of wordsToReplace) {
        output = output.replace(word, word + "\xA9");//where \xA9 is ASCI code for copyright
    }
    console.log(output)
    return output;
}


//Routing:
app.get("/string-api/:input", async(request, response) => {
    try {
        const input = request.params.input;

        const output = await stringApi(input);
        if (output == null) return response.status([])

        return response.json({
            "output": output
        })
    } catch (err) {
        return response.status(400).json(err.message)
    }
})

const port = parseInt(process.env.PORT, 10) || 8801

app.listen(8801, () => {
    console.log(`listening on port 8801 ${process.env.PORT}`)
})