import { configQuery } from "@/@config/api";
import { dataTeam as data } from "@/@json/data/team";

const { url, key } = configQuery.team;

async function getAll() {
  return data;
}

async function getSingle(id: any) {
  return data[Number(id) - 1];
}

getAll.key = [...key, "featured"];
getSingle.key = [...key, "single"];

const apiTeam = {
  getAll,
  getSingle,
};

export default apiTeam;
