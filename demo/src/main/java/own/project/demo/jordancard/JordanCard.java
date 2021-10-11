package own.project.demo.jordancard;

import javax.persistence.*;

@Entity
@Table(name = "jordan")
public class JordanCard {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    private String pic;
    private String description;
    private String name;
    private String price;

    public JordanCard(int id, String pic, String desc, String name, String price) {
        this.id = id;
        this.pic = pic;
        this.description = desc;
        this.name = name;
        this.price = price;
    }

    public JordanCard() {

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

    public String getDesc() {
        return description;
    }

    public void setDesc(String description) {
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
