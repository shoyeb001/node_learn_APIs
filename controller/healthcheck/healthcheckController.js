const healthcheckController = {
    healthcheck(req,res,next){
        const health = {
            uptime:process.uptime(),
            responsetime: process.hrtime(),
            message: "ok",
            timestamp: Date.now(),
        }

        try {
            res.json(health);
        } catch (error) {
            health.message=error;
            res.status(503).send();
        }
    }
}

export default healthcheckController;
