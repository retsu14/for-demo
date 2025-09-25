export interface Article {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  author: string;
  category: "Forecast" | "Warning" | "Update" | "Analysis";
  content: string; // HTML string rendered via dangerouslySetInnerHTML
}

export const articlesData: Article[] = [
  {
    id: "typhoon-malakas-path",
    title: "Typhoon Malakas Path: Projected Trajectory and Impact Areas",
    excerpt:
      "Meteorologists track Typhoon Malakas as it moves west-northwest at 12 mph. Current models show potential landfall in eastern coastal regions by Wednesday evening.",
    image:
      "https://images.unsplash.com/photo-1527482797697-8795b05a13fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    date: "Today, 10:45 AM",
    author: "Dr. Michael Wong",
    category: "Forecast",
    content: `
      <p>Typhoon Malakas continues to strengthen as it moves west-northwest at approximately 12 mph (19 km/h), according to the latest satellite data and weather models. The Joint Typhoon Warning Center has upgraded Malakas to a Category 4 storm with sustained winds of 130 mph (215 km/h) and gusts reaching up to 155 mph (250 km/h).</p>
      <p>Current trajectory models show the storm making landfall along the eastern coastal regions by Wednesday evening, with a cone of uncertainty spanning approximately 75 miles. Coastal communities from Northport to South Harbor are under mandatory evacuation orders, while areas further inland have been placed under typhoon watches and warnings.</p>
      <h3>Projected Timeline</h3>
      <ul>
        <li><strong>Tuesday morning:</strong> Outer rain bands begin affecting eastern islands</li>
        <li><strong>Tuesday evening:</strong> Tropical storm force winds reach coastal areas</li>
        <li><strong>Wednesday afternoon:</strong> Hurricane force winds begin impacting the coast</li>
        <li><strong>Wednesday evening:</strong> Expected landfall between 6-9 PM local time</li>
        <li><strong>Thursday:</strong> System weakens as it moves inland but continues to produce heavy rainfall</li>
      </ul>
      <p>Meteorological agencies are closely monitoring a high-pressure system to the north that could influence Malakas's path in the next 24-36 hours. Any northward shift could significantly alter the projected landfall location, potentially bringing the most severe impacts further up the coastline.</p>
      <p>"The rapid intensification we've observed over the past 18 hours is concerning," said Dr. Michael Wong, lead meteorologist at the National Weather Center. "Warm ocean temperatures of 29°C (84°F) are providing ideal conditions for further strengthening before landfall."</p>
      <h3>Impact Predictions</h3>
      <p>Areas within the direct path of Typhoon Malakas can expect:</p>
      <ul>
        <li>Catastrophic wind damage, particularly to structures not built to withstand Category 4 conditions</li>
        <li>Storm surge of 10-15 feet above normal tide levels</li>
        <li>Rainfall totals of 15-20 inches, with isolated amounts up to 25 inches</li>
        <li>Widespread flooding, including flash flooding in urban areas and riverine flooding</li>
        <li>High risk of landslides in mountainous regions</li>
      </ul>
      <p>Emergency management officials stress that preparations should be rushed to completion in all areas under typhoon warnings. Residents who have not yet evacuated from mandatory zones should do so immediately, as conditions will deteriorate rapidly once outer bands reach the coast.</p>
      <p>We will continue to provide hourly updates as Typhoon Malakas approaches. Stay tuned to WeatherWatch for the latest information and evacuation guidance.</p>
    `,
  },
  {
    id: "emergency-preparations-typhoon",
    title: "Emergency Preparations: What You Need Before Typhoon Landfall",
    excerpt:
      "Essential supplies, evacuation routes, and safety protocols to follow as Typhoon Malakas approaches. Officials recommend at least 3 days of emergency supplies.",
    image:
      "https://images.unsplash.com/photo-1468259275383-c4f1b88d5772?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    date: "Today, 9:30 AM",
    author: "Emma Rodriguez",
    category: "Warning",
    content: `
      <p>With Typhoon Malakas approaching and expected to make landfall within 36 hours, emergency management officials are urging residents in affected areas to complete preparations immediately. Whether you plan to evacuate or shelter in place (if permitted in your area), proper preparation is essential for safety.</p>
      <h3>Essential Emergency Supplies</h3>
      <p>Officials recommend having at least 3-7 days of emergency supplies ready. Your emergency kit should include:</p>
      <ul>
        <li><strong>Water:</strong> One gallon per person per day (minimum 3-day supply)</li>
        <li><strong>Food:</strong> Non-perishable, easy-to-prepare items (minimum 3-day supply)</li>
        <li><strong>Medications:</strong> 7-day supply of prescription medications and medical items</li>
        <li><strong>First aid kit:</strong> Including antiseptic, bandages, pain relievers, and prescription medications</li>
        <li><strong>Flashlights and batteries:</strong> Multiple flashlights and extra batteries</li>
        <li><strong>Battery-powered or hand-crank radio:</strong> For receiving emergency information</li>
        <li><strong>Portable phone chargers:</strong> Fully charged power banks</li>
        <li><strong>Personal hygiene items:</strong> Soap, toothpaste, sanitizer, etc.</li>
        <li><strong>Important documents:</strong> In waterproof container (insurance policies, identification, bank records)</li>
        <li><strong>Cash:</strong> ATMs and credit card machines may not work during power outages</li>
        <li><strong>Pet supplies:</strong> Food, water, medications, carriers</li>
      </ul>
      <h3>Evacuation Guidance</h3>
      <p>If you live in a mandatory evacuation zone (coastal areas and flood-prone regions), you should:</p>
      <ul>
        <li>Leave immediately – do not delay</li>
        <li>Follow designated evacuation routes (avoid shortcuts as they may be blocked)</li>
        <li>Bring your emergency supply kit</li>
        <li>Notify family/friends of your evacuation plan and destination</li>
        <li>Secure your home before leaving (see home preparation below)</li>
        <li>If you need transportation assistance, contact local emergency management at 555-EVAC</li>
      </ul>
      <h3>Home Preparation</h3>
      <p>To minimize damage to your property:</p>
      <ul>
        <li>Board up windows or close storm shutters</li>
        <li>Secure outdoor furniture and objects that could become projectiles</li>
        <li>Move valuable items to higher floors if flooding is possible</li>
        <li>Turn refrigerator/freezer to coldest setting and keep closed (in case of power outages)</li>
        <li>Fill bathtubs and large containers with water for sanitary purposes (not drinking)</li>
        <li>Unplug small appliances</li>
        <li>Turn off propane tanks and utilities if instructed by authorities</li>
      </ul>
      <h3>Shelter Information</h3>
      <p>Emergency shelters have been established at the following locations:</p>
      <ul>
        <li>Central High School (1200 Main St.)</li>
        <li>Westside Community Center (345 Park Ave.)</li>
        <li>North County College (780 Education Dr.)</li>
        <li>Eastside Convention Center (550 Harbor Blvd.)</li>
      </ul>
      <p>Shelters will open at 8:00 AM Tuesday. Bring bedding, comfort items, necessary medications, and personal hygiene supplies. Pets are allowed at designated pet-friendly shelters (Central High School and Eastside Convention Center only).</p>
      <p>"We cannot stress enough the importance of taking this storm seriously," said Emma Rodriguez, Emergency Management Director. "Your preparations today could save your life tomorrow."</p>
      <p>For more information on evacuation zones, shelter locations, and emergency assistance, call the Typhoon Information Hotline at 555-STORM or visit weather-watch.org/typhoon-malakas.</p>
    `,
  },
  {
    id: "flooding-concerns-reservoirs",
    title: "Flooding Concerns Rise as Reservoirs Reach Capacity",
    excerpt:
      "With 15-20 inches of rain expected, authorities are monitoring reservoir levels. Pre-emptive releases have begun to create capacity for incoming rainfall.",
    image:
      "https://images.unsplash.com/photo-1547683905-f686c993aae5?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    date: "Yesterday, 2:20 PM",
    author: "Lisa Johnson",
    category: "Update",
    content: `
      <p>As Typhoon Malakas approaches with forecasts predicting 15-20 inches of rainfall across the region, water management authorities have initiated emergency protocols to manage reservoir levels and mitigate potential flooding.</p>
      <p>The Regional Water Authority (RWA) announced today that controlled water releases have begun at five major reservoirs that are currently at or near capacity following an unusually wet month. These pre-emptive releases aim to create additional capacity for the expected deluge from Typhoon Malakas.</p>
      <h3>Current Reservoir Status</h3>
      <p>According to the RWA's latest report, reservoir levels across the region stand at concerning levels:</p>
      <ul>
        <li><strong>Eastern Basin Reservoir:</strong> Currently at 96% capacity (normal for this time of year: 75%)</li>
        <li><strong>Mountain Lake Dam:</strong> At 92% capacity (normal: 70%)</li>
        <li><strong>Central Valley Reservoir:</strong> At 89% capacity (normal: 65%)</li>
        <li><strong>North Fork Dam:</strong> At 94% capacity (normal: 80%)</li>
        <li><strong>Westside Retention Basin:</strong> At 87% capacity (normal: 60%)</li>
      </ul>
      <p>"We're facing a potentially dangerous situation with our water management systems," explained Lisa Johnson, Chief Engineer at the RWA. "The ground is already saturated from recent rainfall, and now we're looking at potentially receiving three months' worth of rain in just 48 hours."</p>
      <h3>Controlled Release Strategy</h3>
      <p>The controlled releases began at 6:00 AM today and will continue through tomorrow evening. Officials stress that these releases are carefully calculated to minimize downstream impacts while creating crucial capacity for the incoming rainfall.</p>
      <p>"We're releasing water at a rate that downstream systems can handle," Johnson said. "This is a delicate balance between creating necessary capacity and not causing flooding issues ahead of the storm."</p>
      <p>Communities downstream of the Eastern Basin Reservoir and Central Valley Reservoir have been notified of increased water levels in local waterways. While these levels are expected to remain below flood stage, residents in low-lying areas are advised to remain vigilant.</p>
      <h3>Flood Risk Assessment</h3>
      <p>Despite these preventative measures, officials warn that significant flooding remains likely in several areas:</p>
      <ul>
        <li><strong>High Risk:</strong> Riverside communities along the Eastern River Basin, particularly in Riverdale, East Harbor, and Junction City</li>
        <li><strong>Moderate Risk:</strong> Low-lying areas of Central Valley, especially near tributary streams</li>
        <li><strong>Elevated Risk:</strong> Urban areas with known drainage issues, including parts of downtown and the western industrial district</li>
      </ul>
      <p>Emergency management has begun deploying pumps, sandbags, and other flood mitigation equipment to high-risk areas. Residents in flood-prone locations are strongly encouraged to move valuable possessions to higher floors and be prepared to evacuate if necessary.</p>
      <h3>Monitoring Systems Enhanced</h3>
      <p>The RWA has activated its enhanced monitoring system, which includes:</p>
      <ul>
        <li>24/7 staffing at all major dam and reservoir facilities</li>
        <li>Deployment of additional water level sensors throughout the watershed</li>
        <li>Hourly reporting of water levels and flow rates</li>
        <li>Coordination with emergency services for rapid response to any dam safety concerns</li>
      </ul>
      <p>"Our monitoring capabilities have been significantly improved since the flooding events of 2017," Johnson noted. "We now have real-time data from throughout the watershed that helps us make more informed decisions."</p>
      <p>Residents can access current reservoir levels and river conditions through the RWA's emergency information portal at water-authority.gov/emergency or by calling the flood information hotline at 555-FLOOD.</p>
      <p>Updates on reservoir operations will be provided every four hours as Typhoon Malakas approaches.</p>
    `,
  },
  {
    id: "climate-change-typhoon-intensity",
    title: "Climate Change and Typhoon Intensity: The Connection",
    excerpt:
      "Scientists explain how warming ocean temperatures contribute to stronger and more frequent typhoons, with analysis of recent intensification patterns.",
    image:
      "https://images.unsplash.com/photo-1580193769210-b8d1c049a7d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    date: "2 days ago",
    author: "Dr. Sarah Peterson",
    category: "Analysis",
    content: `
      <p>As Typhoon Malakas intensifies to Category 4 status with winds of 130 mph, climate scientists are pointing to the storm as the latest example of how climate change is affecting tropical cyclone behavior. While no single storm can be directly attributed to climate change, researchers note that Malakas exhibits characteristics consistent with warming-influenced storm systems.</p>
      <h3>Ocean Temperature Connection</h3>
      <p>Typhoons derive their energy from warm ocean waters, and sea surface temperatures in the region where Malakas developed are currently 1.2°C (2.2°F) above the historical average for this time of year.</p>
      <p>"What we're seeing with Malakas is consistent with our understanding of how tropical cyclones behave in warmer waters," explains Dr. Sarah Peterson, climate scientist at the Oceanic Research Institute. "The unusually warm ocean temperatures provide more energy for the storm, allowing it to intensify more rapidly and potentially reach higher maximum intensities."</p>
      <p>Satellite data shows that Malakas intensified from a Category 1 to a Category 4 storm in just 18 hours, a rate of intensification that meets the meteorological definition of "rapid intensification" by a significant margin.</p>
      <h3>Intensification Trends</h3>
      <p>A comprehensive study published last year in the Journal of Climate Science found that the proportion of tropical cyclones that undergo rapid intensification increased by approximately 15% between 1982 and 2020 in the region. This trend correlates strongly with rising sea surface temperatures.</p>
      <p>"What's particularly concerning about rapid intensification is that it reduces warning time," notes Peterson. "Communities have less time to prepare when a storm strengthens so quickly, which can lead to more significant impacts."</p>
      <p>The study also found that the average maximum intensity of typhoons in the region has increased by approximately 8% over the same period, with a notable uptick in Category 4 and 5 storms over the past decade.</p>
      <h3>Rainfall Intensity</h3>
      <p>Climate models consistently show that warming temperatures lead to increased atmospheric moisture content, which translates to heavier rainfall during storm events. Current projections for Typhoon Malakas include rainfall totals of 15-20 inches, with isolated areas potentially receiving up to 25 inches.</p>
      <p>"For every 1°C increase in atmospheric temperature, the air can hold approximately 7% more moisture," Peterson explains. "This means that even if storm frequency doesn't change significantly, individual storms can produce substantially more rainfall, increasing flood risks."</p>
      <p>Analysis of rainfall data from typhoons over the past 40 years shows a clear trend toward higher precipitation totals, with the average major typhoon now producing approximately 12% more rainfall than similar storms in the 1980s.</p>
      <h3>Storm Surge Amplification</h3>
      <p>Another climate factor affecting Typhoon Malakas's potential impact is sea level rise. Regional sea levels have risen approximately 15 centimeters (6 inches) since 1980, which amplifies storm surge effects.</p>
      <p>"Sea level rise acts as a force multiplier for storm surge," says Peterson. "What might have been a 10-foot storm surge in 1980 could now be closer to 10.5 feet, which may not sound dramatic until you consider that this extra half-foot can extend flooding significantly further inland in flat coastal areas."</p>
      <p>Current projections indicate that Malakas could generate storm surges of 10-15 feet above normal tide levels in the most severely impacted coastal areas.</p>
      <h3>Future Projections</h3>
      <p>Climate models suggest that if current warming trends continue, the region could see:</p>
      <ul>
        <li>A 20-40% increase in Category 4 and 5 typhoon frequency by 2050</li>
        <li>A 25% increase in average rainfall rates within 100 km of typhoon centers</li>
        <li>Expansion of the geographical range where intense typhoons can form and maintain strength</li>
      </ul>
      <p>"While we can't say climate change 'caused' Typhoon Malakas, what we can say with high confidence is that climate change is creating conditions where storms like Malakas become more common and potentially more destructive," Peterson concludes. "This underscores the importance of both climate mitigation efforts and improved resilience planning for coastal communities."</p>
    `,
  },
];
