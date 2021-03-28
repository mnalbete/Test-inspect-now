const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const userRoutes = require("./authentication");

// API Routes
router.use("/api", apiRoutes);
router.use(userRoutes);

// If no API routes are hit, send the React app
router.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../../client/public/index.html"));
  });

module.exports = router;