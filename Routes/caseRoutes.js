const express = require("express");
const router = express.Router();

const {
  getCases,
  createCase
} = require("../controllers/caseController");

/**
 * @swagger
 * /api/cases:
 *   get:
 *     summary: Get all cases
 */
router.get("/cases", getCases);

/**
 * @swagger
 * /api/cases:
 *   post:
 *     summary: Create a new case
 */
router.post("/cases", createCase);

module.exports = router;
