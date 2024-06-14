const express = require('express');
const router = express.Router();

// GET
router.get("/", async (req, res) => {
    return res.json({
        success: true,
        message: "v1: Success.",
        code: 200
    })
        .end();
});

// POST
router.get("/", async (req, res) => {
    return res.json({
        success: true,
        message: "v1: Success.",
        code: 200
    })
        .end();
});

module.exports = router;