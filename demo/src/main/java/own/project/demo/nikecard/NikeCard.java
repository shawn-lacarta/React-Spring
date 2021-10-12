package own.project.demo.nikecard;

import javax.persistence.*;

@Entity
@Table(name = "nike")
public class NikeCard {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    private String pic;
    private String description;
    private String name;
    private String price;

    public NikeCard() {

    }

    public NikeCard(int id, String pic, String description, String name, String price) {
        this.id = id;
        this.pic = pic;
        this.description = description;
        this.name = name;
        this.price = price;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getPic() {
        return pic;
    }

    public void setPic(String pic) {
        this.pic = pic;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPrice() {
        return price;
    }

    public void setPrice(String price) {
        this.price = price;
    }
}
