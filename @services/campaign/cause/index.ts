import { configQuery } from "@/@config/api";
import { dataCampaignCause as causes } from "@/@json/data/cause";

const { url, key } = configQuery.campaign.causes;

async function getFeatured() {
  return causes;
}

async function getSingle(id: any) {
  return causes[Number(id) - 1];
}

async function getCauseStats() {
  return {
    causeCount: "0",
    participantCount: "0",
  };
}

getFeatured.key = [...key, "featured"];
getSingle.key = [...key, "single"];
getCauseStats.key = [...key, "stats"];

const apiCause = {
  getFeatured,
  getSingle,
  getCauseStats,
};

export default apiCause;
