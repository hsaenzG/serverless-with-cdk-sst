import { SSTConfig } from "sst";
import { serverlessAppStack } from "./stacks/serverlessAppStack";
import { infraStack } from "./stacks/infraStack";

export default {
  config(_input) {
    return {
      name: "rest-api",
      region: "us-east-1",
    };
  },
  stacks(app) {
    app
      .stack(serverlessAppStack)
      .stack(infraStack)
  }
} satisfies SSTConfig;
