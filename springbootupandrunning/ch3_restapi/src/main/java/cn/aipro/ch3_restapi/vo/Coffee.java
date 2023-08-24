package cn.aipro.ch3_restapi.vo;

import java.util.UUID;

public class Coffee {
    private final String id;

    private String name;

    public Coffee(String id, String name) {
        if (null == id) {
            id = UUID.randomUUID().toString();
        }
        this.id = id;
        this.name = name;
    }

    public Coffee(String name) {
        this(UUID.randomUUID().toString(), name);
    }

    public String getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
