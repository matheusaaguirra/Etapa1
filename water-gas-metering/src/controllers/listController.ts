import { Request, Response } from 'express';

export const listMeasures = async (req: Request, res: Response) => {
    const { customer_code } = req.params;
    const { measure_type } = req.query;

    return res.status(200).json({
        customer_code,
        measures: [], // Resultado da consulta
    });
};
