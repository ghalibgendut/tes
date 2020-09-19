const router = require('express').Router();



// Reverse 
router.post('/api/reverse', (req,res)=>{
    const data = req.body;
    let splitData = data.character.split("");
    let revData = splitData.reverse();
    let joinData = revData.join("");

    return res.status(200).send(joinData);
});


// Fibonacci

router.post('/api/fibonacci', (req,res)=>{
    let fib = [0,1];
    for (let i = fib.length; i < req.body.n; i++) {
        fib[i] = fib[i-2] + fib[i-1];
    }

    return res.status(200).send(fib+'');
});


// 








module.exports = router;