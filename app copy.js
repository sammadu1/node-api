const express = require("express")
const app = express()

app.use(express.json());

// list of target phrases
const wordsToReplace = ["Google", "Microsoft", "Amazon", "Deloitte", "Oracle"];


const stringApi = function(input) {
    let searchString = input.toLowerCase(); //to ensure target words are always the same Lower || Upper

    for (let word of wordsToReplace) {
        let target = word.toLowerCase(); //to ensure target words are always the same Lower || Upper

        console.log(searchString.search(target) != -1);

        // console.log("======================");
        if (searchString.search(target) != -1) {
            return input + "\xA9"
        }


    }
    // console.log(input)
    return input;
}


const port = parseInt(process.env.PORT, 10) || 8801

//routing
app.get("/string-api/:input", async(request, response) => {

    try {
        const input = request.params.input;

        const output = await stringApi(input);
        // if (output == null) return response.status([])

        return response.json({
            "output": output
        })
    } catch (err) {
        console.log(`\n Format : ${port}/string-api/${input}`)
        return response.status(400).json(err.message)
    }
})



app.listen(port, () => {
    console.log(`listening on port ${port}`)
})