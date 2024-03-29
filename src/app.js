import express, { urlencoded } from 'express'
import morgan from 'morgan'
import customerRoutes from './routes/customer.routes.js'
import customerGroupRoutes from './routes/customergroup.routes.js'
import orderRoutes from './routes/order.routes.js'
import operationInputRoutes from './routes/opeinput.routes.js'
import operationReturnRoutes from './routes/opereturn.routes.js'
import operationRoutes from './routes/operation.routes.js'
import userRoutes from './routes/user.routes.js'
import productRoutes from './routes/product.routes.js'
import productCategoryRoutes from './routes/productcategory.routes.js'
import productGroupRoutes from './routes/productgroup.routes.js'
import warehouse from './routes/warehouse.routes.js'
import movement from './routes/movement.routes.js'
import authRoutes from './routes/auth.routes.js'



//Initializations
const app = express();




//Middleware
app.use(morgan('dev'));
app.use(express.json());


//Routes
app.use('/api',customerRoutes);
app.use('/api',orderRoutes);
app.use('/api',customerGroupRoutes);
app.use('/api',operationInputRoutes);
app.use('/api',operationReturnRoutes);
app.use('/api',operationRoutes);
app.use('/api',userRoutes);
app.use('/api',productRoutes);
app.use('/api',productCategoryRoutes);
app.use('/api',productGroupRoutes);
app.use('/api',warehouse);
app.use('/api',movement);
app.use('/api/auth',authRoutes);

app.use((req,res, next) => {
    res.status(404).json({
        message: 'Endpoint not found'
    });
})

export default app;