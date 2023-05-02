require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const { writeFile } = require("fs");
const { Configuration, OpenAIApi } = require("openai");
// application => express
const app = express();
const config = new Configuration({ apiKey: process.env.API_KEY });

app.use(express.json());
app.use(morgan("tiny"));

app.get("/", (req, res) => {
    res.json("Hello server");
});
// post
app.post("/", async (req, res) => {
    const { question } = req.body;

    if (question?.trim()?.toLowerCase()) {
        try {
            const openai = new OpenAIApi(config);
            const completion = await openai.createCompletion({
                model: "text-davinci-003",
                prompt: question?.toLowerCase(),
                max_tokens: 400,
            });
            const result = completion.data.choices[0].text;
            //   create file
            writeFile("./log.txt", `${question?.toLowerCase()} => ${result}\n------------------------------------------\n`, { encoding: "utf8", flag: "a" }, (err) => {
                if (err) {
                    console.log(err);
                    return;
                }
                console.log("File created...");
            });

            res.status(200).json({ status: 200, answer: result });
        } catch (error) {
            console.error(error.message);
        }
    } else {
        res.status(400).json({ status: 400, message: "Please enter something..." });
    }
});

const PORT = 8000;

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
