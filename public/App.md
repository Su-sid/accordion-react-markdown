

## **Changelog**

# Stay updated on everything we shipping
<br />

## **2022** 
[V1.4.0](#version-140---04082022)  
[V1.3.5](#version-135---13052022)  
[V0.0.0](#version-000--00000000)
<br />
<br />
<br />
# [Version 1.4.0] - 04.08.2022
## **New & Changed**
### **General**
- Add changelog page
- Allow sql statement components to contain leading/trailing spaces or semicolons at the end
- Optimize performance of save operations for rule list fields
- Increase size limit for save operations  
   ![icon](img/Important-c.svg) **Important!**
   This change will affect the size limit for autofiller rules ( how many entries in all fields combined). But note that large rules will significantly increase loading times and decrease performance in the rules table page if the corresponding table is selected in the templates table. To a lesser degree it also affects other components showing rule data like the rule details page or the rule add/edit dialog.
### _Autofiller Configurator_
- Add rule field dependency feature for dropdown fields. This allows rule fields in the add/edit rule dialog to set flexible default values in other fields.
- Change error message for saving rules which exceed the size limit
- Improve visibility of rule field previews in template add/edit dialog

![icon](img/fix.svg)  **Fixed**
### _Autofiller Configurator_
- Empty lines in rule list fields were not removed after saving
- Editing duplicate entries in rule list fields also deleted additional entries
- Deleting many rule list field entries caused an error when saving
<br />
<br />
<br />
<br />
<br />
<br />
# [Version 1.3.5] - 13.05.2022
## **New & Changed**
### **General**
- Expiring dialog to show when session is expired
- Minor layout improvements
### _Autofiller Configurator_
- Doubling of rule size limit for saving a rule
- Paginator enabled in history and crosscheck tables
- Reload functionality enabled in crosscheck tables
- Change column name from “Identifier” to “Distinct NE-Codes” in rule table
### _Consolidation Configurator_
* **crosscheck table**  
  * Reload functionality enabled in rule table

![icon](img/fix.svg)  **Fixed**
### _Autofiller Configurator_
- Order-ID miscalculation if new template field is added
- Rule copy overwriting original rule when saved
- Loading issue with large amount of data in