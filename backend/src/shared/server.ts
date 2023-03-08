import { app } from './infra/http/config/app';

const port = Number(process.env.PORT) || 3000;

app.get('/', async (_req, res) => {
    try {
        const [instructors] = await connection.execute(
            'SELECT * FROM technology.language',
        );

        return res.status(200).json(instructors);
    } catch (e) {
        return res.status(500).send(e);
    }
});


app.listen(port, () => console.log(`Server is running 🚀 - ${port}`));
