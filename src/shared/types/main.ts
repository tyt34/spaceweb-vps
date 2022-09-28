export interface typeReq {
  id: string
  jsnrpc: string
  version: string
  result: IResult
}

interface IResult {
  categories: ICategory[]
  datacenters: IDataCenter[]
  osPanel: IOsPanel[]
  selectOs: ISelectOs[]
  selectPanel: ISelectPanel[]
  vpsPlans: IVpsPlans[] 
}

interface ICategory {
  id: string
  slug: string
  name: string
  prior: string
}

interface IDataCenter {
  id: string
  name: string
  location: string
  site_name: string
}

interface IOsPanel {
  availablePlanIds: number[]
  distributive: string
  minRam: number
  minStorage: number
  os: string
  panel: string
}

interface ISelectOs {
  description: string
  id: string
  name: string
  order: string
  panel_type: string[]
}

interface ISelectPanel {
  creation_time: null | string
  description: string
  id: string
  name: string
  order: string
  price: number
}

interface IVpsPlans {
  billing_id: string
  category: string
  category_id: string
  constructor: string
  cpu_cores: string
  datacenters: number[]
  disk_type: string
  id: number
  is_promo: string
  name: string
  package_duration: string
  parent_plan_id: null
  price_per_month: number
  price_per_month_promo: number
  ram: string
  ts_create: string
  ts_update: string
  units: string
  volume_disk: string
  year_price_per_month: number
  year_price_per_month_promo: number
}