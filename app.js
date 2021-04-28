// Initialize express web framework
const express = require("express")
const app = express()

app.use(express.json());

// list of target phrases as input
// const wordsToReplace = ["Google", "Microsoft", "Amazon", "Deloitte", "Oracle"]; //test with input parameters
const wordsToReplace = ["Google", "Microsoft", "Oracle"];


const stringApi = function (input) {
    let output = input.toLowerCase();

//iterate through words to replace with for each loop
    for (let word of wordsToReplace){
        let target = word.toLowerCase();
        output = output.split(target).join(word+"\xA9");


    }
    console.log(output)
    return output; 
}

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
        return response.status(400).json(err.message+ "Format :  {baseURL}/string-api/{input string to  convert}"
        )
        console.log("invalid input")
    }
})
//port to use
const port = parseInt(process.env.PORT, 10) || 8801

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})
