export interface typeReq {
  id: string
  jsnrpc: string
  version: string
  result: IResult
}

interface IResult {
  /**
   * категории выбора vps
   */
  categories: ICategory[]
  /**
   * доступные датацентры
   */
  datacenters: IDataCenter[]
  /**
   * подробности касательно ос 
   */
  osPanel: IOsPanel[]
  /**
   * все доступные ос
   */
  selectOs: ISelectOs[]
  /**
   * все доступные по
   */
  selectPanel: ISelectPanel[]
  /**
   * все доступные тарифы
   */
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

export interface ISelectOs {
  description: string
  id: string
  name: string
  order: string
  /**
   * доступное ПО
   */
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

export interface IVpsPlans {
  billing_id: string
  category: 'nvme' | 'turbo' | 'hdd'
  category_id: string
  constructor: string
  /**
   * количество ядер cpu
   */
  cpu_cores: string
  /**
   * доступные датацентры
   */
  datacenters: number[]
  /**
   * тип диска
   */
  disk_type: string
  id: number
  is_promo: string
  /**
   * полное название категории
   */
  name: string
  package_duration: string
  parent_plan_id: null
  /**
   * оплата в месяц
   */
  price_per_month: number
  price_per_month_promo: number
  ram: string
  ts_create: string
  ts_update: string
  units: string
  /**
   * количество МБ для диска
   */
  volume_disk: string
  year_price_per_month: number
  year_price_per_month_promo: number
}

export interface ISelectType {
  value: string
  label: string
}