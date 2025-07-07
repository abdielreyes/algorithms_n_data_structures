public class Main {

    public static void main(String[] args) {

        User abdiel = new User("abdiel");
        User amazon_default = new User("amazon_default");

        WebPage webPage = new WebPage();
        webPage.visit(abdiel.getUsername());
        webPage.visit(amazon_default.getUsername());

        System.out.println(webPage.getFirstVisitor());
    }
}
