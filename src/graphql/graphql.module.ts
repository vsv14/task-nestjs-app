import { Module } from '@nestjs/common';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { MongoModule } from 'src/mongodb/mongo.module';
import { UserResolver } from './resolvers/user.resolver';
import { GroupResolver } from './resolvers/group.resolver';



@Module({
    imports: [
        MongoModule,
        GraphQLModule.forRoot<ApolloDriverConfig>(
            {
                driver: ApolloDriver,
                autoSchemaFile: join(process.cwd(), 'src/graphql/schemas/schema.gql'),
                useGlobalPrefix:true,
            }
        ),
    ],
    providers: [UserResolver, GroupResolver]
    
})
export class GraphqlModule {}
