import { TaskType } from "../../types";

export const primary = "#283593";
export const primaryLight = "#5f5fc4";
export const primaryDark = "#001064";
export const black = "#000";
export const white = "#fff";
export const gray = "#f5f7fa";
export const gray200 = "#eee";
export const gray400 = "#8a8b8f";
export const green = "#17c3a5";
export const blue = "#5096f7";
export const orange = "#fa8036";
export const pink = "#ea5a92";

export const taskTypeToColor = {
  [TaskType.AppDevelopment]: green,
  [TaskType.Business]: blue,
  [TaskType.CampaignStore]: orange,
  [TaskType.WebDesign]: pink,
};
