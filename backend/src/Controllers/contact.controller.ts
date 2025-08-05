import { Request, Response } from 'express';
import { Contact } from '../Models/Contact';

export const submitContact = async (req: Request, res: Response) => {
  try {
    const { name, email, subject, message } = req.body;

    // Basic field validation
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'Please provide name, email, and message fields.',
      });
    }

    // Save to DB
    const newContact = await Contact.create({ name, email, subject, message });

    return res.status(201).json({
      success: true,
      message: 'Contact message submitted successfully.',
      data: newContact,
    });
  } catch (error: any) {
    console.error('❌ Error saving contact:', error.message || error);

    return res.status(500).json({
      success: false,
      message: 'Server Error. Failed to save contact.',
      error: error.message || 'Unknown error occurred.',
    });
  }
};
