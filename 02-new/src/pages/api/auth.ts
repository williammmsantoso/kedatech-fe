import { NextApiRequest, NextApiResponse } from "next";

export const handler = (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const body = req.body;

        console.log(body);

        res.status(200).json({ email: body.email });
    } catch (error: any) {
        return res.status(400).json({ message: error.message });
    }
}