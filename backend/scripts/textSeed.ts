// "seed": "ts-node scripts/seedName.ts" 
//npm run seed

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()

async function main() {
 await prisma.text.createMany({
  data: [
   {
    "title": "Create and schedule content quicker.",
    "desc": ""
   },
   {
    "title": "Social Media 10x Faster with AI",
    "desc": "Over 4,000 5-star reviews"
   },
   {
    "title": "Schedule to social media.",
    "desc": "Optimize post timings to publish content at the perfect time for your audience."
   },
   {
    "title": "Write your content using AI.",
    "desc": ""
   },
   {
    "title": "Manage multiple accounts and platforms.",
    "desc": ""
   },
   {
    "title": ">56%",
    "desc": "faster audience growth"
   },
   {
    "title": "Maintain a consistent posting schedule.",
    "desc": ""
   },
   {
    "title": "Grow followers with non-stop content.",
    "desc": ""
   }
  ]
 });
}

main()
 .catch(e => {
  console.error(e);
  process.exit(1);
 })
 .finally(async () => {
  await prisma.$disconnect();
 });