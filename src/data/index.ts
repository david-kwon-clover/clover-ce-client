import GoImage from "../assets/device_go.png";
import CompactImage from "../assets/device_compact.png";
import FlexImage from "../assets/device_flex.png";
import FlexPocketImage from "../assets/device_flexpocket.png";
import MiniImage from "../assets/device_mini.png";
import StationSoloImage from "../assets/device_stationsolo.png";
import StationDuoImage from "../assets/device_stationduo.png";
import KioskImage from "../assets/device_kiosk.png";
import KdsImage from "../assets/device_kds.png";

interface CostEstimatorProjectw {
  plans: Plan[];
  devices: Device[];
}

type BillingPeriod = "monthly" | "quarterly" | "semi-annually" | "annually";

interface Plan {
  id: number;
  name: string;
  features: string[];
  price: number;
  availableDevices: Device[]; 
}

interface Device {
  id: number;
  name: string;
  description: string;
  availablePlans: Plan[];
  image: string
}

export const devices: Device[] = [
    {
        id: 1,
        name: "Clover Go",
        description: "Pair this portable credit card reader with your phone to take payments wherever you do business. Get the power of a POS anywhere you have a WiFi or cellular internet connection.",
        availablePlans: [],
        image: GoImage
    },
    {
        id: 2,
        name: "Clover Compact",
        description: "Our essential countertop terminal ensures smooth transactions and hassle-free processing for a price that's just right.",
        availablePlans: [],
        image: CompactImage
    },
    {
        id: 3,
        name: "Clover Flex",
        description: "Power in the palm of your hand - at the counter, at the table, or on the go. This portable device is packed with all the features of a full POS system.",
        availablePlans: [],
        image: FlexImage
    },
    {
        id: 4,
        name: "Clover Flex Pocket",
        description: "Take payments anytime, anywhere with a POS system that fits in your back pocket.",
        availablePlans: [],
        image: FlexPocketImage
    },
    {
        id: 5,
        name: "Clover Mini",
        description: "Run your business with the sleek and powerful Mini, a POS that fits in any space. Everything you need is right on the device.",
        availablePlans: [],
        image: MiniImage
    },
    {
        id: 6,
        name: "Clover Station Solo",
        description: "Power your business with a complete point-of-sale system that's easy to work with and extend. Do it all, from payments to operations and management.",
        availablePlans: [],
        image: StationSoloImage
    },
    {
        id: 7,
        name: "Clover Station Duo",
        description: "Station Duo keeps up with your business so you can keep the line moving. This all-in-one POS speeds up transactions with a customer-facing screen.",
        availablePlans: [],
        image: StationDuoImage
    },
    {
        id: 8,
        name: "Clover Kiosk",
        description: "Our all-in-one device features an enterprise grade 24\" display, versatile payment terminal, and a built-in printer, all with low-touch set up.",
        availablePlans: [],
        image: KioskImage
    },
    {
        id: 9,
        name: "Clover Kitchen Display System",
        description: "One screen. One source of truth. No pens, no printers, no lost tickets. Just a real-time look at ticket times, order statuses, and everything else that keeps service moving smoothly.",
        availablePlans: [],
        image: KdsImage
    },
]
