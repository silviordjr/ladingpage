import app from "./app";
import CreateRequest from "./endpoints/CreateRequest";

app.post('/request', CreateRequest)