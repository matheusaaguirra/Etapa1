import { Request, Response } from 'express';

export const confirmMeasure = async (req: Request, res: Response) => {
    const { measure_uuid, confirmed_value } = req.body;

    return res.status(200).json({ success: true });
};
