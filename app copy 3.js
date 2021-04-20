//initialize express web framework
const express = require("express")
const app = express()

app.use(express.json());

//list of target keywords
const wordsToReplace = ["Google", "Microsoft", "Amazon", "Deloitte", "Oracle"];

const stringApi = function (input) {
    let output = input.toLowerCase();

    for (let word of wordsToReplace){
        let target = word.toLowerCase();
        output = output.replace(target, word+"\xA9");


    }
    console.log(output)
    return output; 
}

//Routing:
app.get("/string-api/:input", async(request, response) => {
    try {
        const input = request.params.input;
    
        const output = await stringApi(input);
        // if (output == null) return response.status([])

        return response.json({
            "output": output
        })
    } catch (err) {
        return response.status(400).json(err.message+ "Format :  {baseURL}/string-api/{input string to  convert}"
        )
        console.log("invalid input")
    }
})

const port = parseInt(process.env.PORT, 10) || 8801

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})
