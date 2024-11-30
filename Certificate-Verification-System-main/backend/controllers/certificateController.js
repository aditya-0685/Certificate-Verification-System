const Certificate = require('../models/Certificate');
const exceljs = require('exceljs');

// Upload Excel data and store it in MongoDB
const uploadCertificates = async (req, res) => {
  try {
    const workbook = new exceljs.Workbook();
    await workbook.xlsx.load(req.file.buffer);
    const worksheet = workbook.getWorksheet(1);

    worksheet.eachRow({ includeEmpty: false }, async (row) => {
      const [certificateId, studentName, internshipDomain, startDate, endDate] = row.values;
      const newCertificate = new Certificate({
        certificateId,
        studentName,
        internshipDomain,
        startDate: new Date(startDate),
        endDate: new Date(endDate)
      });
      await newCertificate.save();
    });

    res.status(200).json({ message: 'Certificates uploaded successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to upload certificates' });
  }
};

// Get a certificate by certificateId
const getCertificateById = async (req, res) => {
  const { certificateId } = req.params;

  try {
    const certificate = await Certificate.findOne({ certificateId });

    if (!certificate) {
      return res.status(404).json({ message: 'Certificate not found' });
    }

    res.status(200).json(certificate);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching certificate' });
  }
};

module.exports = { uploadCertificates, getCertificateById };
