
/**
 * Simulates the purchase of movie tickets
 *
 * @author Daniel McElroy
 * @version 12/10/20
 */
import java.util.*;

public class BuyMovieTickets extends Applet
{
    public static void main(String[] args)
    {
        Scanner input = new Scanner(System.in);
        
        //takes shopper first name as string
        System.out.println("Please enter your first name: ");
        String shopperFirstName = input.nextLine();
        
        //takes shopper last name as string
        System.out.println("Please enter your last name: ");
        String shopperLastName = input.nextLine();
        
        //takes date as string
        System.out.println("Enter todays date (mm/dd/yyyy): ");
        String date = input.nextLine();
        
        //takes movie name as string
        System.out.println("What movie would you like to see: ");
        String itemName = input.nextLine();
        
        //takes number of tickets as string
        System.out.println("How many tickets? ");
        String itemQuantity = input.nextLine();
        
        //takes ticket price as string
        System.out.println("What is the ticket price? ");
        String itemPrice = input.nextLine();
        
        //takes debit card number as string
        System.out.println("Enter your debit card number (#####-###-####): ");
        String debitNum = input.nextLine();
        
        //takes pin number as string
        System.out.println("Enter your PIN (####): ");
        String pin = input.nextLine();
    
        String orderNum = shopperLastName.substring(0,2)+debitNum.substring(6,9);
    
        int itemQuantityInt = Integer.parseInt(itemQuantity);
        double itemPriceDouble = Double.parseDouble(itemPrice);
        
        double totalCost = itemPriceDouble*itemQuantityInt;
    
        System.out.println("*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*");
        System.out.println("~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~");
        System.out.println("Your e-Receipt");
        System.out.println("");
        System.out.println("");
        System.out.println(date);
        System.out.println("Order number: "+orderNum);
        System.out.println("");
        System.out.println("    "+shopperFirstName.substring(0,1)+". "+shopperLastName);
        System.out.println("    Account: *****-***-"+debitNum.substring(10,14));
        System.out.println("    Movie: "+itemName);
        System.out.println("    Number of Tickets: "+itemQuantity);
        System.out.println("    Ticket Price: "+itemPrice);
        System.out.println("");
        System.out.println("$"+totalCost+" will be debited to your account.");
        System.out.println("");
        System.out.println("Thank you. Enjoy your movie tonight.");
        
        System.out.println("*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~");
        System.out.println("*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~");
        
    }
}
