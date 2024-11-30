const express = require('express');
const router = express.Router();
const { uploadCertificates, getCertificateById } = require('../controllers/certificateController');

// Route to upload certificates via Excel file (admin only)
router.post('/upload', uploadCertificates);

// Route to get a certificate by its unique ID
router.get('/:certificateId', getCertificateById);

module.exports = router;
