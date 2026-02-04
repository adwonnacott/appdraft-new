# Go with the Flow – A Guide to Salesforce Flows

- adam
- February 12th, 2024

Salesforce has continued its investment in the development of Flows in recent years. Flows replaced Workflow Rules and are an intuitive, canvas-based method of designing automations. But what are the common use cases for Flows?

## Record Triggered Flows

The most common use-cases for Flows are to automate the updating or creation of records from a trigger. The following are examples of use cases for ‘Record-Triggered Flows’

- **Lead Qualification** – When a lead is created or updated in Salesforce, a record-triggered flow can automatically evaluate certain criteria such as lead score, industry, or region. If the lead meets specific criteria, the flow can update the lead status to “Qualified” and assign it to the appropriate sales representative based on territory or other factors
- **Case Escalation** – In a customer support scenario, when a case is created or updated, a record-triggered flow can analyse the case details such as priority, severity, or SLA status. If the case requires escalation, the flow can automatically assign it to a higher-level support agent, notify the manager, or even create a task for follow-up
- **Inventory Management Processes** – For businesses managing inventory in Salesforce, a record-triggered flow can be triggered when a product’s quantity reaches a certain threshold. The flow can check the inventory levels and reorder products automatically from suppliers when inventory is low

## Screen Flows

Screen Flows in Salesforce provide interactive experiences for users to input or view data within a guided process. he following are examples of use cases for Screen Flows:

- **Customer Onboarding** – Screen flows can be used to streamline customer onboarding processes. When a new customer is taken on, a Screen Flow can be initiated to collect all the necessary information relating to billing processes, preferences, credit levels, etc
- **Customer Service** – Screen flows can enhance the handing of customer service queries by providing a guided process for submitting, allocating and tracking service Cases. If you’re using Experience Cloud, you can even expose these Screen Flows directly to the customer online, guiding them through the Case creation process
- **Order Management** – Screen flows can streamline the order management process by guiding users through the steps of creating, reviewing, and processing orders. Sales representatives can use a screen flow to enter customer details, select products, specify quantities, apply discounts, and review pricing before submitting the order for processing

## Scheduled Flows

Scheduled Flows help businesses run regular (usually daily) processes over a set of records. Here are some use cases:

- **Data Cleanup** – Scheduled flows can be used to perform routine data cleanup and maintenance tasks to ensure data integrity and system performance
- **Notification and Follow-up Reminders** – Scheduled flows can be employed to send out automated email notifications and follow-up reminders to users or customers at predefined intervals
- **Report Generation and Distribution** – Scheduled flows can generate and distribute reports or dashboards automatically on a recurring basis, ensuring stakeholders have access to up-to-date information

You can schedule a flow to run at the end of each month to generate sales reports, financial summaries, or performance metrics and distribute them to relevant users or teams via email or Chatter posts.

Additionally, scheduled flows can be used to archive or export data for compliance or auditing purposes, running at regular intervals to generate snapshots of data for historical record-keeping.

Flows are just one tool in the box and, as with most things Salesforce, there are many ways to achieve the same objective.

## Apex

Apex is Salesforce’s coding language and is similar to Java. Apex is generally considered more complex to master than Flows and is the typically the preserve of developers. Developing in Apex typically takes longer than creating Flows, not least because developers will need to write accompanying test code in order to deploy it to Salesforce. So why not just use Flows?

Apex offers a few advantages in certain circumstances:

- **Handling Large Record Numbers** – Flows are constrained in several ways and, when dealing with a high number of records or individual processes, a Flow can hit ‘governor limits’ imposed by Salesforce; effectively causing a break
- **Error Handling** – Apex provides more advanced error handling capabilities compared to Flows, allowing for more sophisticated exception handling and logging
- **Integration Requirements** – If you need to integrate with external systems, perform complex data manipulations, or interact with Salesforce data at a lower level (e.g., using REST or SOAP APIs), Apex provides more flexibility and control; although Salesforce is closing this gap with Flow Actions for integration

## Summary

Flows should be a general go-to for automation logic. They are great for rapid development and are accessible to administrators and non-developers. They offer a visual way to automate business processes without writing code. That said, fully understanding flows can take some time and they have become increasingly complex as Salesforce has developed additional features.

In summary, Apex is typically chosen for its flexibility, performance, and ability to handle complex scenarios, while Flows offer rapid development, declarative customisation, and ease of use for less complex requirements. The choice between the two often depends on the specific needs of the project and the skillset of the development team. Many projects use a combination of both Apex and Flows to leverage the strengths of each approach.

[Facebook](https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fappdraft.com%2F2024%2F02%2F12%2Fgo-with-the-flow-a-guide-to-salesforce-flows%2F "Facebook")[X](https://twitter.com/intent/tweet?text=Go%20with%20the%20Flow%20%20-%20A%20Guide%20to%20Salesforce%20Flows&url=https%3A%2F%2Fappdraft.com%2F2024%2F02%2F12%2Fgo-with-the-flow-a-guide-to-salesforce-flows%2F "X")[Linkedin](https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fappdraft.com%2F2024%2F02%2F12%2Fgo-with-the-flow-a-guide-to-salesforce-flows%2F "Linkedin")[Whatsapp](https://api.whatsapp.com/send?text=Go%20with%20the%20Flow%20%20-%20A%20Guide%20to%20Salesforce%20Flows%20https%3A%2F%2Fappdraft.com%2F2024%2F02%2F12%2Fgo-with-the-flow-a-guide-to-salesforce-flows%2F "Whatsapp")

[Previous Post **From Poacher to Gamekeeper : Building a Career in Salesforce**](https://appdraft.com/2022/04/19/from-poacher-to-gamekeeper-building-a-career-in-salesforce/) [Next Post **Understanding Salesforce Forecasts**](https://appdraft.com/2024/04/28/understanding-salesforce-forecasts/)

# Subscribe to our email insights!

Get product updates, news and views straight to your inbox

[Subscribe](https://mc2z8z4n2rxff9ws9khz7clft9w4.pub.sfmc-content.com/m42dvy3n52v)

CONTACT US

[Call: 020 3858 0040](tel:02038580040) [info@appdraft.com](mailto:info@appdraft.com)

SOCIAL

[facebook](https://www.facebook.com/appdraftco/)[twitter](https://x.com/appdraftco)[instagram](https://www.instagram.com/appdraft/)[linkedin](https://www.linkedin.com/company/appdraft/)

ADDRESS

128 City Road

London EC1V 2NX

© Appdraft 2025. Appdraft Limited is registered in England under company number 11696760 at 128 City Road, London, EC1V 2NX.

[Privacy Policy](https://appdraft.com/privacy-policy/)

[![](https://appdraft.com/wp-content/uploads/2025/07/Pledge1.png)](https://www.pledge1percent.org/)

Home

Ask Me Anything

```

```

HELLO

Home