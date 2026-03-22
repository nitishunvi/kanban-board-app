import "styled-components";
import { AppTheme } from "./theme/Theme.ts";

declare module "styled-components" {
  export interface DefaultTheme extends AppTheme {}
}